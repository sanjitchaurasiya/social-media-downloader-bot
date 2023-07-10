import { IContextBot } from '../config';
import { SocialMediaType } from '../entities/storage';
import { notifyAdmin } from '../shared/notifyAdmin';
import { saveServiceInitiator } from './storage';

interface OnServiceInitArgs {
	ctx: IContextBot;
	socialMediaType: SocialMediaType;
	originalLink: string;
}

export const onServiceInit = ({
	ctx,
	originalLink,
	socialMediaType,
}: OnServiceInitArgs) => {
	if ('message' in ctx.update) {
		const user = ctx.update.message.from;
		notifyAdmin({
			user,
			originalLink,
			text: `${socialMediaType} service initialized! 🚀`,
		});
		saveServiceInitiator(user, socialMediaType);
	}
};
