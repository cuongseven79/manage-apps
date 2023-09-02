export default function Icon({ name, size = 24, className = 'bg-[white]' }) {
    return <img src={`/src/assets/icons/${name}.svg`} width={size} height={size} className={className} />;
}


// const Wrapper = ({ size = 24, viewBox, children, className }) => (
//     <svg className={clsx('bg-opacity-20', className)} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill={'none'}>
//         {children}
//     </svg>
// );

// export const PieIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 18 19`}>
//         <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M13.3981 10.5745C13.9604 10.5745 14.4323 11.0386 14.3463 11.5938C13.8419 14.8605 11.0455 17.2859 7.67264 17.2859C3.94107 17.2859 0.916504 14.2614 0.916504 10.5307C0.916504 7.45699 3.25159 4.59383 5.88054 3.94646C6.44545 3.80699 7.0244 4.20436 7.0244 4.78593C7.0244 8.72629 7.15685 9.74558 7.9051 10.3C8.65335 10.8544 9.53317 10.5745 13.3981 10.5745Z"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M17.0768 7.293C17.1215 4.76142 14.0119 0.680718 10.2224 0.750893C9.92766 0.756156 9.6917 1.00177 9.67854 1.29563C9.58293 3.37721 9.71187 6.07458 9.7838 7.29738C9.80573 7.67809 10.1049 7.97721 10.4847 7.99914C11.7417 8.07107 14.5373 8.16931 16.5891 7.85879C16.868 7.81668 17.0724 7.57458 17.0768 7.293Z"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </Wrapper>
// );

// export const UsersIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 18 18`}>
//         <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M6.99268 11.6724C10.0668 11.6724 12.6943 12.1382 12.6943 13.999C12.6943 15.8599 10.0843 16.339 6.99268 16.339C3.91768 16.339 1.29102 15.8774 1.29102 14.0157C1.29102 12.154 3.90018 11.6724 6.99268 11.6724Z"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M6.99289 9.01634C4.97456 9.01634 3.33789 7.38051 3.33789 5.36217C3.33789 3.34384 4.97456 1.70801 6.99289 1.70801C9.01039 1.70801 10.6471 3.34384 10.6471 5.36217C10.6546 7.37301 9.02956 9.00884 7.01872 9.01634H6.99289Z"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <path d="M12.7358 8.0679C14.07 7.8804 15.0975 6.7354 15.1 5.34956C15.1 3.98373 14.1042 2.8504 12.7983 2.63623" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         <path
//             d="M14.4961 11.2769C15.7886 11.4694 16.6911 11.9227 16.6911 12.856C16.6911 13.4985 16.2661 13.9152 15.5794 14.176"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </Wrapper>
// );

// export const DotIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 24 25`}>
//         <path
//             d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <path
//             d="M19 13.5C19.5523 13.5 20 13.0523 20 12.5C20 11.9477 19.5523 11.5 19 11.5C18.4477 11.5 18 11.9477 18 12.5C18 13.0523 18.4477 13.5 19 13.5Z"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <path
//             d="M5 13.5C5.55228 13.5 6 13.0523 6 12.5C6 11.9477 5.55228 11.5 5 11.5C4.44772 11.5 4 11.9477 4 12.5C4 13.0523 4.44772 13.5 5 13.5Z"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </Wrapper>
// );

// export const CopyIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 17 17`}>
//         <path
//             d="M11.4665 13.333H6.13314C5.60271 13.333 5.094 13.1223 4.71892 12.7472C4.34385 12.3721 4.13314 11.8634 4.13314 11.333V4.66634C4.13314 4.48953 4.0629 4.31996 3.93788 4.19494C3.81285 4.06991 3.64328 3.99967 3.46647 3.99967C3.28966 3.99967 3.12009 4.06991 2.99507 4.19494C2.87004 4.31996 2.7998 4.48953 2.7998 4.66634V11.333C2.7998 12.2171 3.15099 13.0649 3.77612 13.69C4.40124 14.3152 5.24908 14.6663 6.13314 14.6663H11.4665C11.6433 14.6663 11.8129 14.5961 11.9379 14.4711C12.0629 14.3461 12.1331 14.1765 12.1331 13.9997C12.1331 13.8229 12.0629 13.6533 11.9379 13.5283C11.8129 13.4032 11.6433 13.333 11.4665 13.333ZM14.7998 5.95967C14.7929 5.89843 14.7795 5.83809 14.7598 5.77967V5.71967C14.7278 5.65113 14.685 5.58812 14.6331 5.53301L10.6331 1.53301C10.578 1.48115 10.515 1.4384 10.4465 1.40634H10.3865L10.1731 1.33301H7.46647C6.93604 1.33301 6.42733 1.54372 6.05226 1.91879C5.67719 2.29387 5.46647 2.80257 5.46647 3.33301V9.99967C5.46647 10.5301 5.67719 11.0388 6.05226 11.4139C6.42733 11.789 6.93604 11.9997 7.46647 11.9997H12.7998C13.3302 11.9997 13.8389 11.789 14.214 11.4139C14.5891 11.0388 14.7998 10.5301 14.7998 9.99967V5.99967C14.7998 5.99967 14.7998 5.99967 14.7998 5.95967ZM10.7998 3.60634L12.5265 5.33301H11.4665C11.2897 5.33301 11.1201 5.26277 10.9951 5.13775C10.87 5.01272 10.7998 4.84315 10.7998 4.66634V3.60634ZM13.4665 9.99967C13.4665 10.1765 13.3962 10.3461 13.2712 10.4711C13.1462 10.5961 12.9766 10.6663 12.7998 10.6663H7.46647C7.28966 10.6663 7.12009 10.5961 6.99507 10.4711C6.87004 10.3461 6.7998 10.1765 6.7998 9.99967V3.33301C6.7998 3.1562 6.87004 2.98663 6.99507 2.8616C7.12009 2.73658 7.28966 2.66634 7.46647 2.66634H9.46647V4.66634C9.46647 5.19677 9.67719 5.70548 10.0523 6.08055C10.4273 6.45563 10.936 6.66634 11.4665 6.66634H13.4665V9.99967Z"
//             fill={color}
//         />
//     </Wrapper>
// );

// export const ChefIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 26 26`}>
//         <path
//             d="M18.856 3.073c-0.108 0 -0.217 0.003 -0.326 0.008C17.349 1.166 15.283 0 13 0c-2.283 0 -4.35 1.166 -5.53 3.081a6.422 6.422 0 0 0 -0.326 -0.008c-3.585 0 -6.502 2.917 -6.502 6.502 0 2.999 2.058 5.581 4.901 6.301v9.238c0 0.49 0.397 0.887 0.887 0.887h13.138c0.49 0 0.887 -0.397 0.887 -0.887v-9.237c2.843 -0.72 4.901 -3.302 4.901 -6.301 0 -3.585 -2.917 -6.502 -6.502 -6.502zm-0.174 21.153H7.318v-1.672H18.682v1.672zm0.776 -9.964a0.887 0.887 0 0 0 -0.776 0.88v5.933h-1.702v-5.534a0.739 0.739 0 1 0 -1.479 0v5.534h-1.762v-5.534a0.739 0.739 0 1 0 -1.479 0v5.534H10.499v-5.534a0.739 0.739 0 1 0 -1.479 0v5.534H7.318V15.228l0.002 -0.03a0.887 0.887 0 0 0 -0.774 -0.936c-2.354 -0.297 -4.129 -2.312 -4.129 -4.688 0 -2.607 2.121 -4.727 4.727 -4.727 0.228 0 0.461 0.017 0.691 0.051a0.887 0.887 0 0 0 0.924 -0.485C9.563 2.785 11.188 1.774 13 1.774c1.812 0 3.437 1.011 4.241 2.639a0.887 0.887 0 0 0 0.924 0.485 4.761 4.761 0 0 1 0.691 -0.051c2.606 0 4.727 2.121 4.727 4.727 0 2.374 -1.774 4.389 -4.126 4.688z"
//             fill={color}
//         />
//     </Wrapper>
// );
// export const SortIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 16 16`}>
//         <path d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z" fill={color} />
//         <path d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z" fill={color} />
//         <path
//             d="M9.33317 11.8335H6.6665C6.39317 11.8335 6.1665 11.6068 6.1665 11.3335C6.1665 11.0602 6.39317 10.8335 6.6665 10.8335H9.33317C9.6065 10.8335 9.83317 11.0602 9.83317 11.3335C9.83317 11.6068 9.6065 11.8335 9.33317 11.8335Z"
//             fill={color}
//         />
//     </Wrapper>
// );

// export const FilterIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 16 16`}>
//         <path d="M14.6668 2.5H1.3335L6.66683 8.80667V13.1667L9.3335 14.5V8.80667L14.6668 2.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </Wrapper>
// );

// export const PlusIcon = ({ color = '#8B8D97', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 16 17`}>
//         <path d="M8.00016 3.8335V13.1668M3.3335 8.50016H12.6668" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </Wrapper>
// );

// export const ExistIcon = ({ color = '#1C1D22', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 24 24`}>
//         <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </Wrapper>
// );
// export const UploadIcon = ({ color = '#1C1D22', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 24 24`}>
//         <path d="M21.1527 10.8995L12.1371 19.9151C10.0869 21.9653 6.76275 21.9653 4.71249 19.9151C2.66224 17.8648 2.66224 14.5407 4.71249 12.4904L13.7281 3.47483C15.0949 2.108 17.311 2.108 18.6779 3.47483C20.0447 4.84167 20.0447 7.05775 18.6779 8.42458L10.0158 17.0866C9.33238 17.7701 8.22434 17.7701 7.54092 17.0866C6.8575 16.4032 6.8575 15.2952 7.54092 14.6118L15.1423 7.01037" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </Wrapper>
// );
// export const TrashIcon = ({ color = '#1C1D22', ...props }) => (
//     <Wrapper {...props} viewBox={`0 0 24 24`}>
//         <path d="M21.1527 10.8995L12.1371 19.9151C10.0869 21.9653 6.76275 21.9653 4.71249 19.9151C2.66224 17.8648 2.66224 14.5407 4.71249 12.4904L13.7281 3.47483C15.0949 2.108 17.311 2.108 18.6779 3.47483C20.0447 4.84167 20.0447 7.05775 18.6779 8.42458L10.0158 17.0866C9.33238 17.7701 8.22434 17.7701 7.54092 17.0866C6.8575 16.4032 6.8575 15.2952 7.54092 14.6118L15.1423 7.01037"
//             stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </Wrapper>
// );

// export const ChervonIcon = ({ color = '#8B8D97', light, width = '1.5', ...props }) => (
//     <Wrapper {...{ size: 20, ...props }} viewBox={`0 0 16 17`}>
//         <path d="M4 6.5L8 10.5L12 6.5" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
//     </Wrapper>
// );

// export const UserIcon = ({ color = '#C36609', light, width = '1.5', ...props }) => (
//     <Wrapper {...{ size: 24, ...props }} viewBox={`0 0 24 24`}>
//         <path
//             d="M12.0001 15C8.83002 15 6.01089 16.5306 4.21609 18.906C3.8298 19.4172 3.63665 19.6728 3.64297 20.0183C3.64785 20.2852 3.81546 20.6219 4.02546 20.7867C4.29728 21 4.67396 21 5.42733 21H18.5729C19.3262 21 19.7029 21 19.9747 20.7867C20.1847 20.6219 20.3523 20.2852 20.3572 20.0183C20.3635 19.6728 20.1704 19.4172 19.7841 18.906C17.9893 16.5306 15.1702 15 12.0001 15Z"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//         <path
//             d="M12.0001 12C14.4854 12 16.5001 9.98528 16.5001 7.5C16.5001 5.01472 14.4854 3 12.0001 3C9.51481 3 7.5001 5.01472 7.5001 7.5C7.5001 9.98528 9.51481 12 12.0001 12Z"
//             stroke={color}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </Wrapper>
// );

// export const NavigationIcon = ({ color = '#8B8D97', light, width = '1.5', ...props }) => (
//     <Wrapper {...{ size: 20, ...props }} viewBox={`0 0 22 22`}>
//         <path
//             d="M3.12908 9.84911C2.58335 9.63688 2.31048 9.53076 2.23082 9.37786C2.16176 9.24531 2.16166 9.08741 2.23057 8.95478C2.31005 8.80179 2.58279 8.69535 3.12828 8.48248L18.6087 2.44133C19.1011 2.24917 19.3473 2.15309 19.5047 2.20565C19.6413 2.25129 19.7485 2.35851 19.7942 2.49514C19.8467 2.65247 19.7506 2.89867 19.5585 3.39109L13.5173 18.8715C13.3044 19.417 13.198 19.6898 13.045 19.7692C12.9124 19.8381 12.7545 19.838 12.6219 19.769C12.469 19.6893 12.3629 19.4165 12.1507 18.8707L9.74159 12.6759C9.69851 12.5651 9.67697 12.5097 9.6437 12.4631C9.61422 12.4217 9.57806 12.3856 9.53672 12.3561C9.49008 12.3228 9.43469 12.3013 9.32392 12.2582L3.12908 9.84911Z"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </Wrapper>
// );

// export const LinkIcon = ({ color = '#0096EB', light, width = '1.5', ...props }) => (
//     <Wrapper {...{ size: 20, ...props }} viewBox={`0 0 16 16`}>
//         <path
//             d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333"
//             stroke={color}
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         />
//     </Wrapper>
// );