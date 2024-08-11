import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

type chaptersType = {
    title: string;
    id: number;
}

export const portfolioChapters: chaptersType[] = [
    { title: 'Дипломы', id: PortfolioChaptersEnum.DIPLOMAS },
    { title: 'Сертификаты', id: PortfolioChaptersEnum.CERTIFICATES },
    { title: 'Повышение квалификации', id: PortfolioChaptersEnum.QUALIFICATION },
    { title: 'Благодарности', id: PortfolioChaptersEnum.APPRECIATION },
]