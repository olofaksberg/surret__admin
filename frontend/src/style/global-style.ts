import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    color: ${colors.fontGreyDD};
    word-break: break-word;
  }

  // animations
@keyframes showAni {
  0% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
  
.show-ani {
  animation: showAni 0.4s ease-out forwards;
}

  // helpers
$spaceamounts: (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
$sides: (top, bottom, left, right);
@each $space in $spaceamounts {
  .p-#{$space} {
    padding: #{$space}rem !important;
  }
  .m-#{$space} {
    margin: #{$space}rem !important;
  }
  // .FG-#{$space} {
  //   gap: #{$space}rem !important;
  // }
  .FG-#{$space} {
    gap: #{$space}rem !important;
  }

  @each $side in $sides {
    .m-#{$side}-#{$space} {
      margin-#{$side}: #{$space}rem !important;
    }
    .p-#{$side}-#{$space} {
      padding-#{$side}: #{$space}rem !important;
    }

    .pos-A-#{$side}-#{$space} {
      #{$side}: #{$space}rem !important;
    }
  }
}

// flex
.flex {
  display: flex;

  &.JC-SB {
    justify-content: space-between;
  }

  &.JC-SA {
    justify-content: space-around;
  }

  &.JC-SE {
    justify-content: space-evenly;
  }

  &.JC-C {
    justify-content: center;
  }

  &.JC-E {
    justify-content: flex-end;
  }

  &.FW-wrap {
    flex-wrap: wrap;
  }

  &.FD-C {
    flex-direction: column;
  }
}

// general
.w-50 {
  width: 50%;
}

.w-100 {
  width: 100%;
}

.w-FT {
  width: fit-content;
}

.h-50 {
  height: 50%;
}

.h-100 {
  height: 100%;
}

.OF-H {
  overflow: hidden;
}

.TT-UC {
  text-transform: uppercase;
}

.TA-C {
  text-align: center;
}

.TA-L {
  text-align: left;
}

.TD-U {
  text-decoration: underline;
}
.TD-N {
  text-decoration: none;
}

.AI-C {
  align-items: center;
}

.FW-bold {
  font-weight: bold;
}

.pos-R {
  position: relative;
}

.pos-A {
  position: absolute;
}

.pointer {
  cursor: pointer;
}

//  font color
.FC-G-LL {
  color: ${colors.fontGreyLL};
}

.FC-G-L {
  color: ${colors.fontGreyL};
}

.FC-G-M {
  color: ${colors.fontGreyM};
}

.FC-G-MD {
  color: ${colors.fontGreyMD};
}

.FC-G-D {
  color: ${colors.fontGreyD};
}

.FC-G-DD {
  color: ${colors.fontGreyDD};
}

.FC-white {
  color: white;
}

`;
