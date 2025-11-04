import React from 'react';

import { Icon } from 'src/shared';
import { IconName } from 'src/shared/ui/icon/icon.names';
import { ContactLinkCode } from 'src/store/store.types';

export const ContactLinkCodeIconMap: Record<ContactLinkCode, React.FC<{ className: string }>> = {
  [ContactLinkCode.GITHUB]: ({ className }) => <Icon icon={IconName.GITHUB} className={className} title="GitHub" />,
  [ContactLinkCode.HEAD_HUNTER]: ({ className }) => (
    <Icon icon={IconName.HEAD_HUNTER} className={className} title="Head Hunter" />
  ),
  [ContactLinkCode.LINKEDIN]: ({ className }) => (
    <Icon icon={IconName.LINKEDIN} className={className} title="LinkedIn" />
  ),
  [ContactLinkCode.GOOGLE_EMAIL]: ({ className }) => (
    <Icon icon={IconName.EMAIL} className={className} title="Google email" />
  ),
  [ContactLinkCode.YANDEX_EMAIL]: ({ className }) => (
    <Icon icon={IconName.EMAIL} className={className} title="Yandex email" />
  ),
  [ContactLinkCode.YOUTUBE]: ({ className }) => <Icon icon={IconName.YOUTUBE} className={className} title="YouTube" />,
  [ContactLinkCode.LEETCODE]: ({ className }) => (
    <Icon icon={IconName.LEETCODE} className={className} title="LeetCode" />
  ),
  [ContactLinkCode.INSTAGRAM]: ({ className }) => (
    <Icon icon={IconName.INSTAGRAM} className={className} title="Instagram" />
  ),
  [ContactLinkCode.WHATSAPP]: ({ className }) => (
    <Icon icon={IconName.WHATSAPP} className={className} title="WhatsApp" />
  ),
  [ContactLinkCode.TELEGRAM]: ({ className }) => (
    <Icon icon={IconName.TELEGRAM} className={className} title="Telegram" />
  ),
};

export const CONTACTS_PAGE_TYPE_WRITER_DELAY = 40;
