import {
  FACEBOOK_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
  INSTAGRAM_LINK,
  GOOGLE_LINK,
  KAKAO_LINK,
} from "@/src/constants/url";
import { MAIN_FACEBOOK, MAIN_TWITTER, MAIN_YOUTUBE, MAIN_INSTAGRAM } from "@/src/constants/image";
import { shareOnFacebook, shareOnKakao, copyLink } from "@/src/utils/shares";
import { MODAL_SOCIAL_KAKAO, MODAL_SOCIAL_FACEBOOK, MODAL_SOCIAL_LINK } from "@/src/constants/image";
import { LANDING_LINK, LANDING_MANAGE, LANDING_SEARCH, LANDING_SHARE } from "@/src/constants/image";
import { SIGN_KAKAO, SIGN_GOOGLE } from "@/src/constants/image";
import * as S from "../components/Landing/Main/LandingMainStyle";

export const FOOTER_ICON_LIST = [
  {
    url: FACEBOOK_LINK,
    image: MAIN_FACEBOOK,
    alt: "facebook",
  },
  {
    url: TWITTER_LINK,
    image: MAIN_TWITTER,
    alt: "twitter",
  },
  {
    url: YOUTUBE_LINK,
    image: MAIN_YOUTUBE,
    alt: "youtube",
  },
  {
    url: INSTAGRAM_LINK,
    image: MAIN_INSTAGRAM,
    alt: "instagram",
  },
];

export const SHARE_ICON_LIST = [
  {
    id: "kakaotalk-sharing-btn",
    image: MODAL_SOCIAL_KAKAO,
    alt: "kakao",
    children: "카카오톡",
    onClick: shareOnKakao,
  },
  {
    image: MODAL_SOCIAL_FACEBOOK,
    alt: "facebook",
    children: "페이스북",
    onClick: (folderId) => shareOnFacebook(folderId),
  },
  {
    image: MODAL_SOCIAL_LINK,
    alt: "link",
    children: "링크 추가",
    onClick: () => copyLink(window.location.href),
  },
];

export const FORM_SOCIAL_ICON_LIST = [
  {
    url: GOOGLE_LINK,
    image: SIGN_GOOGLE,
    alt: "google",
  },
  {
    url: KAKAO_LINK,
    image: SIGN_KAKAO,
    alt: "kakao",
  },
];

export const LANDING_CONTENTS_LIST = [
  {
    title: () => (
      <>
        <S.LinkGradient>원하는 링크</S.LinkGradient>를 저장하세요
      </>
    ),
    text: () => (
      <>
        나중에 읽고 싶은 글, 다시 보고 싶은 영상,
        <S.TabletBr /> 사고 싶은 옷,
        <S.MobileBr /> 기억하고 싶은 모든 것을
        <S.TabletBr /> 한 공간에 저장하세요.
      </>
    ),
    image: LANDING_LINK,
    alt: "link",
  },
  {
    title: () => (
      <>
        링크를 폴더로
        <S.ManageGradient> 관리</S.ManageGradient>하세요
      </>
    ),
    text: () => (
      <>
        나만의 폴더를 무제한으로 만들고 <S.TabletBr /> 다양하게 활용할 수
        <S.MobileBr />
        있습니다
      </>
    ),
    image: LANDING_MANAGE,
    alt: "manage",
  },
  {
    title: () => (
      <>
        저장한 링크를
        <S.ShareGradient> 공유</S.ShareGradient>해보세요
      </>
    ),
    text: () => (
      <>
        여러 링크를 폴더에 담고 공유할 수 있습니다.
        <S.TabletBr /> 가족,
        <S.MobileBr /> 친구, 동료들에게 쉽고 빠르게 링크를
        <S.TabletBr /> 공유해 보세요.
      </>
    ),
    image: LANDING_SHARE,
    alt: "share",
  },
  {
    title: () => (
      <>
        저장한 링크를 <S.SearchGradient>검색</S.SearchGradient>해 보세요
      </>
    ),
    text: () => <>중요한 정보들을 검색으로 쉽게 찾아보세요</>,
    image: LANDING_SEARCH,
    alt: "search",
  },
];
