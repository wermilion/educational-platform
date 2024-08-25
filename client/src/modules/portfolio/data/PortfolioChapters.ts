import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

type chaptersType = {
    title: string;
    id: string;
}

export const portfolioChapters: chaptersType[] = [
    { name: 'Дипломы', id: PortfolioChaptersEnum.DIPLOMA },
    { name: 'Сертификаты', id: PortfolioChaptersEnum.CERTIFICATE },
    { name: 'Повышение квалификации', id: PortfolioChaptersEnum.QUALIFICATION },
    { name: 'Благодарности', id: PortfolioChaptersEnum.APPRECIATION },
]