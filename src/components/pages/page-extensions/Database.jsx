import {
    SiMongodb,
    SiNeon,
    SiPostgresql,
    SiMysql,
    SiDrizzle,
    SiXampp,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandTerraform } from "react-icons/tb";
import StackGrid from "@/components/pages/page-extensions/StackGrid";

const databaseStack = [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Neon", icon: SiNeon },
        { name: "Postgresql", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Redis", icon: DiRedis },
        { name: "Drizzle", icon: SiDrizzle },
        { name: "Tabularis", icon: TbBrandTerraform },
        { name: "XAMPP", icon: SiXampp },
];

export default function Database() {
    return <StackGrid items={databaseStack} />;
}
