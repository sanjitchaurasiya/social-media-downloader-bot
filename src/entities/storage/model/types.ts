import { User } from 'typegram';

export interface DatabaseUser extends User {
	date: string;
	status: 'init' | 'finish';
}

export interface DatabaseEntities {
	twitter: DatabaseUser[];
	insta: DatabaseUser[];
	you: DatabaseUser[];
	tiktok: DatabaseUser[];

	footballStats: DatabaseUser[];
	socialBotWokeCount: number;
}

export type SocialMediaType = 'twitter' | 'insta' | 'you' | 'tiktok';
