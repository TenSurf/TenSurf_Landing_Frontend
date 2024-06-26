import React, { type FC } from 'react';

import { type IIconAndIllustration } from '../types/general.types';

interface BearBullProps extends IIconAndIllustration {
  left_level: number;
  right_level: number;
}

const BearBullIcon: FC<BearBullProps> = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  left_level,
  right_level
}) => {
  return (
    <svg
      width='214'
      height='23'
      viewBox='0 0 214 23'
      fill='none'
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.34375 1.37416C0.34375 0.828004 0.7865 0.385254 1.33266 0.385254C1.87882 0.385254 2.32157 0.828004 2.32157 1.37416V21.5341C2.32157 22.0803 1.87882 22.523 1.33266 22.523C0.7865 22.523 0.34375 22.0803 0.34375 21.5341V1.37416Z'
        fill={left_level >= 15 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.46484 2.65334C7.46484 2.10718 7.90759 1.66443 8.45375 1.66443C8.99991 1.66443 9.44266 2.10718 9.44266 2.65334V21.5339C9.44266 22.08 8.99991 22.5228 8.45375 22.5228C7.90759 22.5228 7.46484 22.08 7.46484 21.5339V2.65334Z'
        fill={left_level >= 14 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M14.584 3.55959C14.584 3.01343 15.0267 2.57068 15.5729 2.57068C16.1191 2.57068 16.5618 3.01343 16.5618 3.55959V21.5339C16.5618 22.0801 16.1191 22.5228 15.5729 22.5228C15.0267 22.5228 14.584 22.0801 14.584 21.5339V3.55959Z'
        fill={left_level >= 13 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.7031 5.10549C21.7031 4.55933 22.1459 4.11658 22.692 4.11658C23.2382 4.11658 23.6809 4.55933 23.6809 5.10549V21.5339C23.6809 22.0801 23.2382 22.5228 22.692 22.5228C22.1459 22.5228 21.7031 22.0801 21.7031 21.5339V5.10549Z'
        fill={left_level >= 12 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M28.8242 6.8113C28.8242 6.26514 29.267 5.82239 29.8131 5.82239C30.3593 5.82239 30.802 6.26514 30.802 6.8113V21.5339C30.802 22.08 30.3593 22.5228 29.8131 22.5228C29.267 22.5228 28.8242 22.08 28.8242 21.5339V6.8113Z'
        fill={left_level >= 11 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M35.9453 8.07765C35.9453 7.53149 36.3881 7.08875 36.9342 7.08875C37.4804 7.08875 37.9231 7.5315 37.9231 8.07766V21.5338C37.9231 22.08 37.4804 22.5228 36.9342 22.5228C36.3881 22.5228 35.9453 22.08 35.9453 21.5338V8.07765Z'
        fill={left_level >= 10 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M43.4609 9.251C43.4609 8.70484 43.9037 8.26208 44.4498 8.26208C44.996 8.26208 45.4388 8.70484 45.4388 9.251V21.5338C45.4388 22.08 44.996 22.5227 44.4498 22.5227C43.9037 22.5227 43.4609 22.08 43.4609 21.5338V9.251Z'
        fill={left_level >= 9 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M50.1836 10.7854C50.1836 10.2393 50.6263 9.79651 51.1725 9.79651C51.7187 9.79651 52.1614 10.2393 52.1614 10.7854V21.5339C52.1614 22.08 51.7187 22.5228 51.1725 22.5228C50.6263 22.5228 50.1836 22.08 50.1836 21.5339V10.7854Z'
        fill={left_level >= 8 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M57.3047 12.1953C57.3047 11.6492 57.7474 11.2064 58.2936 11.2064C58.8398 11.2064 59.2825 11.6492 59.2825 12.1953V21.5338C59.2825 22.08 58.8398 22.5227 58.2936 22.5227C57.7474 22.5227 57.3047 22.08 57.3047 21.5338V12.1953Z'
        fill={left_level >= 7 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M64.4258 13.5281C64.4258 12.9819 64.8685 12.5392 65.4147 12.5392C65.9609 12.5392 66.4036 12.9819 66.4036 13.5281V21.5339C66.4036 22.0801 65.9609 22.5228 65.4147 22.5228C64.8685 22.5228 64.4258 22.0801 64.4258 21.5339V13.5281Z'
        fill={left_level >= 6 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M71.5469 14.5943C71.5469 14.0481 71.9896 13.6053 72.5358 13.6053C73.0819 13.6053 73.5247 14.0481 73.5247 14.5943V21.5339C73.5247 22.0801 73.0819 22.5228 72.5358 22.5228C71.9896 22.5228 71.5469 22.0801 71.5469 21.5339V14.5943Z'
        fill={left_level >= 5 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M78.6641 15.7136C78.6641 15.1675 79.1068 14.7247 79.653 14.7247C80.1991 14.7247 80.6419 15.1675 80.6419 15.7136V21.5338C80.6419 22.08 80.1991 22.5227 79.653 22.5227C79.1068 22.5227 78.6641 22.08 78.6641 21.5338V15.7136Z'
        fill={left_level >= 4 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M85.7852 17.0997C85.7852 16.5536 86.2279 16.1108 86.7741 16.1108C87.3202 16.1108 87.763 16.5536 87.763 17.0998V21.5339C87.763 22.0801 87.3202 22.5229 86.7741 22.5229C86.2279 22.5229 85.7852 22.0801 85.7852 21.5339V17.0997Z'
        fill={left_level >= 3 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M92.9062 18.379C92.9062 17.8329 93.349 17.3901 93.8952 17.3901C94.4413 17.3901 94.8841 17.8329 94.8841 18.379V21.5339C94.8841 22.08 94.4413 22.5228 93.8952 22.5228C93.349 22.5228 92.9062 22.08 92.9062 21.5339V18.379Z'
        fill={left_level >= 2 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M100.023 19.6173C100.023 19.0712 100.466 18.6284 101.012 18.6284C101.559 18.6284 102.001 19.0712 102.001 19.6173V21.5338C102.001 22.08 101.559 22.5227 101.012 22.5227C100.466 22.5227 100.023 22.08 100.023 21.5338V19.6173Z'
        fill={left_level >= 1 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M211.086 21.5338C211.086 22.08 211.529 22.5227 212.075 22.5227H212.167C212.713 22.5227 213.156 22.08 213.156 21.5338V1.37387C213.156 0.827707 212.713 0.384956 212.167 0.384956H212.075C211.529 0.384956 211.086 0.827707 211.086 1.37387V21.5338Z'
        fill={right_level >= 15 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M203.633 21.5338C203.633 22.08 204.076 22.5227 204.622 22.5227H204.714C205.26 22.5227 205.703 22.08 205.703 21.5338V2.65324C205.703 2.10708 205.26 1.66434 204.714 1.66434H204.622C204.076 1.66434 203.633 2.10709 203.633 2.65325V21.5338Z'
        fill={right_level >= 14 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M196.18 21.5338C196.18 22.08 196.622 22.5227 197.169 22.5227H197.261C197.807 22.5227 198.25 22.08 198.25 21.5338V3.55948C198.25 3.01332 197.807 2.57057 197.261 2.57057H197.169C196.622 2.57057 196.18 3.01332 196.18 3.55948V21.5338Z'
        fill={right_level >= 13 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M188.727 21.5338C188.727 22.08 189.169 22.5227 189.715 22.5227H189.808C190.354 22.5227 190.797 22.08 190.797 21.5338V5.10539C190.797 4.55923 190.354 4.11648 189.808 4.11648H189.715C189.169 4.11648 188.727 4.55923 188.727 5.10539V21.5338Z'
        fill={right_level >= 12 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M181.277 21.5338C181.277 22.08 181.72 22.5227 182.266 22.5227H182.359C182.905 22.5227 183.348 22.08 183.348 21.5338V6.81123C183.348 6.26507 182.905 5.82232 182.359 5.82232H182.266C181.72 5.82232 181.277 6.26507 181.277 6.81123V21.5338Z'
        fill={right_level >= 11 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M173.824 21.5338C173.824 22.08 174.267 22.5227 174.813 22.5227H174.905C175.452 22.5227 175.894 22.08 175.894 21.5338V8.0776C175.894 7.53144 175.452 7.08869 174.905 7.08869H174.813C174.267 7.08869 173.824 7.53144 173.824 8.0776V21.5338Z'
        fill={right_level >= 10 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M165.957 21.5338C165.957 22.08 166.4 22.5227 166.946 22.5227H167.038C167.584 22.5227 168.027 22.08 168.027 21.5338V9.25095C168.027 8.70479 167.584 8.26204 167.038 8.26204H166.946C166.4 8.26204 165.957 8.70479 165.957 9.25095V21.5338Z'
        fill={right_level >= 9 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M158.918 21.5338C158.918 22.08 159.361 22.5227 159.907 22.5227H159.999C160.545 22.5227 160.988 22.08 160.988 21.5338V10.7853C160.988 10.2392 160.545 9.79642 159.999 9.79642H159.907C159.361 9.79642 158.918 10.2392 158.918 10.7853V21.5338Z'
        fill={right_level >= 8 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M151.465 21.5338C151.465 22.08 151.908 22.5227 152.454 22.5227H152.546C153.092 22.5227 153.535 22.08 153.535 21.5338V12.1953C153.535 11.6491 153.092 11.2064 152.546 11.2064H152.454C151.908 11.2064 151.465 11.6491 151.465 12.1953V21.5338Z'
        fill={right_level >= 7 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M144.012 21.5338C144.012 22.08 144.454 22.5227 145.001 22.5227H145.093C145.639 22.5227 146.082 22.08 146.082 21.5338V13.528C146.082 12.9818 145.639 12.5391 145.093 12.5391H145.001C144.454 12.5391 144.012 12.9818 144.012 13.528V21.5338Z'
        fill={right_level >= 6 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M136.559 21.5338C136.559 22.08 137.001 22.5227 137.548 22.5227H137.64C138.186 22.5227 138.629 22.08 138.629 21.5338V14.5941C138.629 14.048 138.186 13.6052 137.64 13.6052H137.548C137.001 13.6052 136.559 14.048 136.559 14.5941V21.5338Z'
        fill={right_level >= 5 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M129.109 21.5338C129.109 22.08 129.552 22.5227 130.098 22.5227H130.191C130.737 22.5227 131.18 22.08 131.18 21.5338V15.7136C131.18 15.1675 130.737 14.7247 130.191 14.7247H130.098C129.552 14.7247 129.109 15.1675 129.109 15.7136V21.5338Z'
        fill={right_level >= 4 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M121.656 21.5338C121.656 22.08 122.099 22.5227 122.645 22.5227H122.738C123.284 22.5227 123.726 22.08 123.726 21.5338V17.0996C123.726 16.5534 123.284 16.1107 122.738 16.1107H122.645C122.099 16.1107 121.656 16.5534 121.656 17.0996V21.5338Z'
        fill={right_level >= 3 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M114.203 21.5338C114.203 22.08 114.646 22.5227 115.192 22.5227H115.284C115.831 22.5227 116.273 22.08 116.273 21.5338V18.379C116.273 17.8328 115.831 17.3901 115.284 17.3901H115.192C114.646 17.3901 114.203 17.8328 114.203 18.379V21.5338Z'
        fill={right_level >= 2 ? '#EAAC19' : '#D9D9D9'}
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M106.75 21.5338C106.75 22.08 107.193 22.5227 107.739 22.5227H107.831C108.377 22.5227 108.82 22.08 108.82 21.5338V19.6173C108.82 19.0711 108.377 18.6284 107.831 18.6284H107.739C107.193 18.6284 106.75 19.0711 106.75 19.6173V21.5338Z'
        fill={right_level >= 1 ? '#EAAC19' : '#D9D9D9'}
      />
    </svg>
  );
};

export default BearBullIcon;
