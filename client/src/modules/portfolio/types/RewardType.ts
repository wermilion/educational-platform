import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

export type RewardType = {
    id: string;
    image: string;
    name: string;
    description: string;
    type: PortfolioChaptersEnum;
}