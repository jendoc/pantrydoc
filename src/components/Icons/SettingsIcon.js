import React from "react";
import styled from "styled-components";

const Settings = styled.svg``;

export default function SettingsIcon({ color = "", ...rest }) {
  return (
    <Settings
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="41"
      {...rest}
    >
      <path
        d="M24.257 5.44792C23.6155 5.44792 23.0003 5.69904 22.5467 6.14603C22.0932 6.59302 21.8383 7.19927 21.8383 7.83141C21.8383 11.8643 16.8898 13.8855 13.9947 11.0324C13.7716 10.8048 13.5047 10.6232 13.2096 10.4983C12.9146 10.3734 12.5972 10.3076 12.276 10.3049C11.9549 10.3021 11.6364 10.3624 11.3392 10.4823C11.0419 10.6021 10.7719 10.7791 10.5448 11.0029C10.3177 11.2267 10.1381 11.4928 10.0165 11.7857C9.89489 12.0787 9.8337 12.3925 9.83649 12.709C9.83928 13.0255 9.906 13.3382 10.0328 13.629C10.1595 13.9198 10.3438 14.1828 10.5748 14.4027C13.4699 17.2557 11.4213 22.1324 7.32656 22.1324C6.68509 22.1324 6.06991 22.3835 5.61633 22.8305C5.16274 23.2775 4.90792 23.8837 4.90792 24.5159C4.90792 25.148 5.16274 25.7543 5.61633 26.2012C6.06991 26.6482 6.68509 26.8994 7.32656 26.8994C11.4189 26.8994 13.4699 31.776 10.5748 34.629C10.1342 35.0785 9.89042 35.6806 9.89593 36.3056C9.90144 36.9305 10.1558 37.5283 10.6042 37.9702C11.0527 38.4122 11.6593 38.6628 12.2935 38.6683C12.9276 38.6737 13.5386 38.4334 13.9947 37.9993C16.8898 35.1462 21.8383 37.1651 21.8383 41.2003C21.8383 41.8324 22.0932 42.4387 22.5467 42.8857C23.0003 43.3327 23.6155 43.5838 24.257 43.5838C24.8984 43.5838 25.5136 43.3327 25.9672 42.8857C26.4208 42.4387 26.6756 41.8324 26.6756 41.2003C26.6756 37.1674 31.6241 35.1462 34.5192 37.9993C34.7423 38.2269 35.0092 38.4085 35.3043 38.5334C35.5994 38.6583 35.9167 38.7241 36.2379 38.7268C36.559 38.7296 36.8775 38.6693 37.1748 38.5494C37.472 38.4296 37.742 38.2526 37.9691 38.0288C38.1962 37.805 38.3758 37.5389 38.4974 37.246C38.619 36.9531 38.6802 36.6392 38.6774 36.3227C38.6747 36.0062 38.6079 35.6935 38.4812 35.4027C38.3544 35.1119 38.1702 34.8489 37.9392 34.629C35.0441 31.776 37.0926 26.8994 41.1874 26.8994C41.8288 26.8994 42.444 26.6482 42.8976 26.2012C43.3512 25.7543 43.606 25.148 43.606 24.5159C43.606 23.8837 43.3512 23.2775 42.8976 22.8305C42.444 22.3835 41.8288 22.1324 41.1874 22.1324C37.0951 22.1324 35.0441 17.2557 37.9392 14.4027C38.3797 13.9532 38.6235 13.3511 38.618 12.7261C38.6125 12.1012 38.3581 11.5034 37.9097 11.0615C37.4613 10.6196 36.8546 10.3689 36.2205 10.3635C35.5863 10.358 34.9754 10.5983 34.5192 11.0324C31.6241 13.8855 26.6756 11.8667 26.6756 7.83141C26.6756 7.19927 26.4208 6.59302 25.9672 6.14603C25.5136 5.69904 24.8984 5.44792 24.257 5.44792ZM17.0204 7.29989C17.1542 5.49862 17.9747 3.81395 19.317 2.58434C20.6594 1.35472 22.4243 0.671265 24.257 0.671265C26.0897 0.671265 27.8545 1.35472 29.1969 2.58434C30.5393 3.81395 31.3598 5.49862 31.4935 7.29989C32.8813 6.12527 34.6682 5.51062 36.4963 5.57903C38.3244 5.64744 40.0588 6.39385 41.3523 7.6688C42.6457 8.94376 43.4027 10.6532 43.4717 12.4547C43.5407 14.2563 42.9166 16.0171 41.7243 17.3845C43.5522 17.516 45.2618 18.3242 46.5098 19.6469C47.7577 20.9696 48.4516 22.7087 48.4519 24.5148C48.4522 26.3208 47.7589 28.0601 46.5114 29.3832C45.2639 30.7063 43.5545 31.5152 41.7267 31.6473C42.9187 33.0149 43.5424 34.7758 43.473 36.5774C43.4036 38.3789 42.6461 40.0882 41.3524 41.3628C40.0586 42.6375 38.324 43.3835 36.4959 43.4515C34.6678 43.5195 32.8811 42.9044 31.4935 41.7294C31.3598 43.5307 30.5393 45.2154 29.1969 46.445C27.8545 47.6746 26.0897 48.3581 24.257 48.3581C22.4243 48.3581 20.6594 47.6746 19.317 46.445C17.9747 45.2154 17.1542 43.5307 17.0204 41.7294C15.6329 42.9044 13.8462 43.5195 12.018 43.4515C10.1899 43.3835 8.45531 42.6375 7.16155 41.3628C5.8678 40.0882 5.11038 38.3789 5.04097 36.5774C4.97155 34.7758 5.59526 33.0149 6.7872 31.6473C4.95937 31.5155 3.24987 30.7069 2.00213 29.384C0.754388 28.0611 0.0608521 26.3219 0.0608521 24.5159C0.0608521 22.7098 0.754388 20.9706 2.00213 19.6477C3.24987 18.3248 4.95937 17.5163 6.7872 17.3845C5.59162 16.0173 4.96488 14.2552 5.03271 12.4516C5.10054 10.6481 5.85794 8.93649 7.15293 7.66031C8.44793 6.38413 10.1847 5.63774 12.0149 5.57089C13.845 5.50404 15.6331 6.12168 17.0204 7.29989Z"
        fill={color}
      />
      <path
        d="M24.257 19.7489C22.9741 19.7489 21.7438 20.2511 20.8366 21.1451C19.9294 22.0391 19.4198 23.2516 19.4198 24.5159C19.4198 25.7802 19.9294 26.9927 20.8366 27.8866C21.7438 28.7806 22.9741 29.2829 24.257 29.2829C25.54 29.2829 26.7703 28.7806 27.6775 27.8866C28.5847 26.9927 29.0943 25.7802 29.0943 24.5159C29.0943 23.2516 28.5847 22.0391 27.6775 21.1451C26.7703 20.2511 25.54 19.7489 24.257 19.7489ZM17.4172 17.7754C18.3096 16.8648 19.3771 16.1384 20.5575 15.6388C21.7378 15.1391 23.0073 14.8761 24.2919 14.8651C25.5764 14.8541 26.8504 15.0953 28.0393 15.5747C29.2283 16.0541 30.3085 16.762 31.2168 17.6572C32.1252 18.5524 32.8436 19.6168 33.33 20.7885C33.8165 21.9602 34.0612 23.2156 34.0501 24.4816C34.0389 25.7475 33.772 26.9985 33.265 28.1617C32.758 29.3249 32.0209 30.3769 31.0969 31.2564C29.2723 32.9931 26.8285 33.954 24.2919 33.9323C21.7552 33.9106 19.3288 32.9079 17.535 31.1403C15.7413 29.3726 14.7238 26.9813 14.7018 24.4816C14.6797 21.9818 15.6549 19.5735 17.4172 17.7754Z"
        fill={color}
      />
    </Settings>
  );
}