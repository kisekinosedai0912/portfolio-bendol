import { Mesh, Program, Renderer, Triangle, Vec3 } from 'ogl'
import { useEffect, useRef } from 'react'

export default function Orb({
    hue = 150,
    hoverIntensity = 0.2,
    rotateOnHover = true,
    forceHoverState = false,
    backgroundColor = '#07100d'
}) {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const renderer = new Renderer({ alpha: true, premultipliedAlpha: false })
        const gl = renderer.gl
        gl.clearColor(0, 0, 0, 0)
        container.appendChild(gl.canvas)

        const vertex = /* glsl */ `
            precision highp float;
            attribute vec2 position;
            attribute vec2 uv;
            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `
        const fragment = /* glsl */ `
            precision highp float;
            uniform float iTime;
            uniform vec3 iResolution;
            uniform float hue;
            uniform float hover;
            uniform float rot;
            uniform float hoverIntensity;
            uniform vec3 backgroundColor;
            varying vec2 vUv;

            vec3 rgb2yiq(vec3 c) {
                return vec3(
                    dot(c, vec3(0.299, 0.587, 0.114)),
                    dot(c, vec3(0.596, -0.274, -0.322)),
                    dot(c, vec3(0.211, -0.523, 0.312))
                );
            }

            vec3 yiq2rgb(vec3 c) {
                return vec3(
                    c.x + 0.956 * c.y + 0.621 * c.z,
                    c.x - 0.272 * c.y - 0.647 * c.z,
                    c.x - 1.106 * c.y + 1.703 * c.z
                );
            }

            vec3 adjustHue(vec3 color, float hueDeg) {
                float angle = hueDeg * 3.14159265 / 180.0;
                vec3 yiq = rgb2yiq(color);
                float i = yiq.y * cos(angle) - yiq.z * sin(angle);
                float q = yiq.y * sin(angle) + yiq.z * cos(angle);
                yiq.y = i;
                yiq.z = q;
                return yiq2rgb(yiq);
            }

            vec3 hash33(vec3 p) {
                p = fract(p * vec3(0.1031, 0.11369, 0.13787));
                p += dot(p, p.yxz + 19.19);
                return -1.0 + 2.0 * fract(vec3(p.x + p.y, p.x + p.z, p.y + p.z) * p.zyx);
            }

            float noise3(vec3 p) {
                const float K1 = 0.333333333;
                const float K2 = 0.166666667;
                vec3 i = floor(p + (p.x + p.y + p.z) * K1);
                vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
                vec3 e = step(vec3(0.0), d0 - d0.yzx);
                vec3 i1 = e * (1.0 - e.zxy);
                vec3 i2 = 1.0 - e.zxy * (1.0 - e);
                vec3 d1 = d0 - (i1 - K2);
                vec3 d2 = d0 - (i2 - K1);
                vec3 d3 = d0 - 0.5;
                vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
                vec4 n = h * h * h * h * vec4(
                    dot(d0, hash33(i)),
                    dot(d1, hash33(i + i1)),
                    dot(d2, hash33(i + i2)),
                    dot(d3, hash33(i + 1.0))
                );
                return dot(vec4(31.316), n);
            }

            float light(float intensity, float attenuation, float distance) {
                return intensity / (1.0 + distance * attenuation);
            }

            vec4 draw(vec2 uv) {
                vec3 color1 = adjustHue(vec3(0.611765, 0.262745, 0.996078), hue);
                vec3 color2 = adjustHue(vec3(0.298039, 0.760784, 0.913725), hue);
                vec3 color3 = adjustHue(vec3(0.062745, 0.078431, 0.600000), hue);
                float angle = atan(uv.y, uv.x);
                float len = length(uv);
                float invLen = len > 0.0 ? 1.0 / len : 0.0;
                float n0 = noise3(vec3(uv * 0.65, iTime * 0.5)) * 0.5 + 0.5;
                float radius = mix(0.76, 0.84, n0);
                float edgeDistance = distance(uv, (radius * invLen) * uv);
                float edge = light(1.0, 10.0, edgeDistance);
                edge *= smoothstep(radius * 1.05, radius, len);
                float highlight = light(1.4, 5.0, distance(uv, vec2(cos(-iTime), sin(-iTime)) * radius));
                highlight *= light(1.0, 50.0, edgeDistance);
                float shell = smoothstep(1.0, mix(0.6, 1.0, n0 * 0.5), len);
                float core = smoothstep(0.6, mix(0.6, 1.0, 0.5), len);
                vec3 base = mix(color1, color2, cos(angle + iTime * 2.0) * 0.5 + 0.5);
                vec3 color = mix(color3, base, edge);
                color = clamp((color + highlight) * shell * core, 0.0, 1.0);
                float alpha = max(max(color.r, color.g), color.b);
                return vec4(color / (alpha + 1e-5), alpha);
            }

            void main() {
                vec2 center = iResolution.xy * 0.5;
                float size = min(iResolution.x, iResolution.y);
                vec2 uv = (vUv * iResolution.xy - center) / size * 2.0;
                float s = sin(rot);
                float c = cos(rot);
                uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
                uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
                uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);
                vec4 color = draw(uv);
                gl_FragColor = vec4(color.rgb * color.a, color.a);
            }
        `

        const geometry = new Triangle(gl)
        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new Vec3(1, 1, 1) },
                hue: { value: hue },
                hover: { value: 0 },
                rot: { value: 0 },
                hoverIntensity: { value: hoverIntensity },
                backgroundColor: { value: hexToVec3(backgroundColor) }
            }
        })
        const mesh = new Mesh(gl, { geometry, program })

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            const width = container.clientWidth
            const height = container.clientHeight
            renderer.setSize(width * dpr, height * dpr)
            gl.canvas.style.width = `${width}px`
            gl.canvas.style.height = `${height}px`
            program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        }

        let targetHover = 0
        let currentRotation = 0
        let previousTime = 0
        let frameId

        const handleMouseMove = ({ clientX, clientY }) => {
            const bounds = container.getBoundingClientRect()
            const size = Math.min(bounds.width, bounds.height)
            const x = ((clientX - bounds.left - bounds.width / 2) / size) * 2
            const y = ((clientY - bounds.top - bounds.height / 2) / size) * 2
            targetHover = Math.hypot(x, y) < 0.8 ? 1 : 0
        }
        const handleMouseLeave = () => { targetHover = 0 }
        const render = (time) => {
            frameId = requestAnimationFrame(render)
            const delta = (time - previousTime) * 0.001
            previousTime = time
            const activeHover = forceHoverState ? 1 : targetHover

            program.uniforms.iTime.value = time * 0.001
            program.uniforms.hover.value += (activeHover - program.uniforms.hover.value) * 0.1
            if (rotateOnHover && activeHover > 0.5) currentRotation += delta * 0.3
            program.uniforms.rot.value = currentRotation
            renderer.render({ scene: mesh })
        }

        window.addEventListener('resize', resize)
        container.addEventListener('mousemove', handleMouseMove)
        container.addEventListener('mouseleave', handleMouseLeave)
        resize()
        frameId = requestAnimationFrame(render)

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', resize)
            container.removeEventListener('mousemove', handleMouseMove)
            container.removeEventListener('mouseleave', handleMouseLeave)
            container.removeChild(gl.canvas)
            gl.getExtension('WEBGL_lose_context')?.loseContext()
        }
    }, [backgroundColor, forceHoverState, hoverIntensity, hue, rotateOnHover])

    return <div ref={containerRef} className="h-full w-full" />
}

function hexToVec3(color) {
    return new Vec3(
        parseInt(color.slice(1, 3), 16) / 255,
        parseInt(color.slice(3, 5), 16) / 255,
        parseInt(color.slice(5, 7), 16) / 255
    )
}
