import {PortfolioChaptersEnum} from "@/modules/portfolio/enums/PortfolioChapters.ts";

type chaptersType = {
    title: string;
    id: string;
}

export const portfolioChapters: chaptersType[] = [
    { title: 'Дипломы', id: PortfolioChaptersEnum.DIPLOMA },
    { title: 'Сертификаты', id: PortfolioChaptersEnum.CERTIFICATE },
    { title: 'Повышение квалификации', id: PortfolioChaptersEnum.QUALIFICATION },
    { title: 'Благодарности', id: PortfolioChaptersEnum.APPRECIATION },
]