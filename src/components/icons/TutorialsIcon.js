import styles from './TutorialsIcon.module.scss'

const TutorialsIcon = ({ isActive }) => {
  return (
    <div className={styles.container}>
      <svg width="27px" height="25px" viewBox="0 0 27 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>Tutorials</title>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g className={isActive ? styles.group : ""} id="Main/Sidebar-None-Selected" transform="translate(-74.000000, -83.000000)" fill="#FFFFFF">
                  <g id="tutorials" transform="translate(74.000000, 83.500000)">
                      <path d="M7.70539249,10.3609659 L14.987834,11.3752541 C15.5348387,11.4514401 15.9165126,11.956636 15.8403266,12.5036407 C15.8103134,12.7191314 15.7108395,12.9189547 15.5569938,13.0728005 L9.28884041,19.3409538 C8.89831612,19.7314781 8.26515114,19.7314781 7.87462685,19.3409538 C7.72078109,19.1871081 7.62130726,18.9872848 7.59129402,18.7717941 L6.57700585,11.4893525 C6.50081981,10.9423479 6.88249374,10.437152 7.42949843,10.3609659 C7.5210214,10.3482187 7.61386952,10.3482187 7.70539249,10.3609659 Z" id="Rectangle" transform="translate(11.685923, 15.469883) rotate(-225.000000) translate(-11.685923, -15.469883) "></path>
                      <path d="M23.25,5.5 L3.75,5.5 C1.67893219,5.5 0,7.2722062 0,9.45833333 L0,20.5416667 C0,22.7277938 1.67893219,24.5 3.75,24.5 L23.25,24.5 C25.3210678,24.5 27,22.7277938 27,20.5416667 L27,9.45833333 C27,7.2722062 25.3210678,5.5 23.25,5.5 Z M3.75,7.08333333 L23.25,7.08333333 C24.4926407,7.08333333 25.5,8.14665705 25.5,9.45833333 L25.5,20.5416667 C25.5,21.8533429 24.4926407,22.9166667 23.25,22.9166667 L3.75,22.9166667 C2.50735931,22.9166667 1.5,21.8533429 1.5,20.5416667 L1.5,9.45833333 C1.5,8.14665705 2.50735931,7.08333333 3.75,7.08333333 Z" id="Rectangle" fillRule="nonzero"></path>
                      <path d="M18.9,0 L9.1,0 C7.94020203,0 7,0.940202025 7,2.1 L7,4.9 C7,6.05979797 7.94020203,7 9.1,7 L18.9,7 C20.059798,7 21,6.05979797 21,4.9 L21,2.1 C21,0.940202025 20.059798,0 18.9,0 Z M9.1,1.75 L18.9,1.75 C19.2865993,1.75 19.6,2.01116723 19.6,2.33333333 L19.6,4.66666667 C19.6,4.98883277 19.2865993,5.25 18.9,5.25 L9.1,5.25 C8.71340068,5.25 8.4,4.98883277 8.4,4.66666667 L8.4,2.33333333 C8.4,2.01116723 8.71340068,1.75 9.1,1.75 Z" id="Rectangle" fillRule="nonzero"></path>
                  </g>
              </g>
          </g>
      </svg>
    </div>
  );
}

export default TutorialsIcon;

