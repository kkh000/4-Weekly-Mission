import styled from "styled-components";

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  color: var(--Linkbrary-gray60, #9fa6b2);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  svg {
    margin-left: 12px;
  }
`;

export default function Buttons() {
  return (
    <StyledButtonsContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <g clip-path="url(#clip0_83_13293)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.39462 11.045C7.13101 10.7813 7.13101 10.354 7.39462 10.0904L13.8291 3.52012H10.3676C9.99476 3.52012 9.69255 3.21792 9.69255 2.84512C9.69255 2.47233 9.99476 2.17012 10.3676 2.17012H15.4587C15.8315 2.17012 16.1337 2.47233 16.1337 2.84512L16.1337 7.93629C16.1337 8.30909 15.8315 8.61129 15.4587 8.61129C15.0859 8.61129 14.7837 8.30908 14.7837 7.93629L14.7837 4.47472L8.34921 11.045C8.08561 11.3086 7.65822 11.3086 7.39462 11.045Z"
            fill="#9FA6B2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.50039 4.7748C3.87907 4.7748 3.37539 5.27848 3.37539 5.8998V13.9998C3.37539 14.6211 3.87907 15.1248 4.50039 15.1248H12.6004C13.2217 15.1248 13.7254 14.6211 13.7254 13.9998V10.8498C13.7254 10.477 14.0276 10.1748 14.4004 10.1748C14.7732 10.1748 15.0754 10.477 15.0754 10.8498V13.9998C15.0754 15.3667 13.9673 16.4748 12.6004 16.4748H4.50039C3.13349 16.4748 2.02539 15.3667 2.02539 13.9998V5.8998C2.02539 4.5329 3.13349 3.4248 4.50039 3.4248H7.65039C8.02318 3.4248 8.32539 3.72701 8.32539 4.0998C8.32539 4.4726 8.02318 4.7748 7.65039 4.7748H4.50039Z"
            fill="#9FA6B2"
          />
        </g>
        <defs>
          <clipPath id="clip0_83_13293">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <p>공유</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.379 2.40879C12.8199 1.9679 13.5336 1.9679 13.9744 2.40879L16.6721 5.10643C17.113 5.54732 17.113 6.26099 16.6721 6.70187L7.67621 15.6978C7.59359 15.7804 7.4864 15.834 7.37074 15.8505L3.25309 16.4387C3.08483 16.4628 2.91507 16.4062 2.79489 16.286C2.6747 16.1658 2.61811 15.996 2.64215 15.8278L3.23039 11.7101C3.24691 11.5945 3.3005 11.4873 3.38312 11.4047L12.379 2.40879ZM13.2108 3.17246C13.1917 3.15335 13.1618 3.15335 13.1427 3.17246L4.27408 12.0411L3.81312 15.2678L7.03981 14.8068L15.9084 5.9382C15.9275 5.91908 15.9275 5.88923 15.9084 5.87011L13.2108 3.17246Z"
          fill="#9FA6B2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.3225 3.7568C15.5333 3.96768 15.5333 4.30959 15.3225 4.52047L8.26363 11.5793C8.05275 11.7902 7.71084 11.7902 7.49996 11.5793C7.28908 11.3684 7.28908 11.0265 7.49996 10.8156L14.5588 3.7568C14.7697 3.54591 15.1116 3.54591 15.3225 3.7568Z"
          fill="#9FA6B2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.38277 11.4043C3.59365 11.1934 3.93556 11.1934 4.14645 11.4043L7.67586 14.9337C7.88674 15.1446 7.88674 15.4865 7.67586 15.6973C7.46498 15.9082 7.12307 15.9082 6.91218 15.6973L3.38277 12.1679C3.17189 11.957 3.17189 11.6151 3.38277 11.4043Z"
          fill="#9FA6B2"
        />
      </svg>
      <p>이름 변경</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M2.6 4.1H13.4V14.5C13.4 15.2732 12.7732 15.9 12 15.9H4C3.2268 15.9 2.6 15.2732 2.6 14.5V4.1Z"
          stroke="#9FA6B2"
          stroke-width="1.2"
        />
        <path
          d="M5.48387 2.0741C5.72102 1.5998 6.20579 1.3002 6.73607 1.3002H9.26393C9.79421 1.3002 10.279 1.5998 10.5161 2.0741L11.5292 4.1002H4.47082L5.48387 2.0741Z"
          stroke="#9FA6B2"
          stroke-width="1.2"
        />
        <rect x="0.5" y="3.5" width="15" height="1.2" rx="0.6" fill="#9FA6B2" />
        <rect
          x="8.59961"
          y="6.5"
          width="7"
          height="1.2"
          rx="0.6"
          transform="rotate(90 8.59961 6.5)"
          fill="#9FA6B2"
        />
        <rect
          x="11.2002"
          y="6.5"
          width="7"
          height="1.2"
          rx="0.6"
          transform="rotate(90 11.2002 6.5)"
          fill="#9FA6B2"
        />
        <rect
          x="6.2002"
          y="6.5"
          width="7"
          height="1.2"
          rx="0.6"
          transform="rotate(90 6.2002 6.5)"
          fill="#9FA6B2"
        />
      </svg>
      <p>삭제</p>
    </StyledButtonsContainer>
  );
}
