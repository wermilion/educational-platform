import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

export type RewardType = {
    id: string;
    image: string;
    description: string;
    type: PortfolioChaptersEnum;
}