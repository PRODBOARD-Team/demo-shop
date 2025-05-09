export type IntegrationData = {
    info: { title: string; desc: string; }[];
    settings: {
        company?: string;
        instance?: string;
        start?: { guid: string; clone?: boolean; };
    };
};
