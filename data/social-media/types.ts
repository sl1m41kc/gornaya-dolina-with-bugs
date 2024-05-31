export type socialMediaItemName = "vk" | "whatsapp" | "phone";
export interface socialMediaType {
    'vk': string;
    'whatsapp': string;
    'phone': {
        number: string;
        link: string;
    };
}