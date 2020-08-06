import Link from "next/link";
import { useRouter } from "next/router";

import {
  ProfileEditNavOuterContainer,
  ProfileEditNavInnerContainer,
} from "./styles";

const ProfileEditNav = () => {
  const router = useRouter();
  return (
    <ProfileEditNavOuterContainer>
      <ProfileEditNavInnerContainer
        isActive={router.pathname === "/profile/edit/account"}
      >
        <Link href="/profile/edit/account">
          <a>Account</a>
        </Link>
      </ProfileEditNavInnerContainer>
      <ProfileEditNavInnerContainer
        isActive={router.pathname === "/profile/edit/change-password"}
      >
        <Link href="/profile/edit/change-password">
          <a>Password</a>
        </Link>
      </ProfileEditNavInnerContainer>
    </ProfileEditNavOuterContainer>
  );
};

export default ProfileEditNav;
