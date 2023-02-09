// /** @format */
//
// import { memo } from "react";
// import { NavLink } from "react-router-dom";
//
// import styles from "./MovieNavigation.module.css";
//
// export const MovieNavigation = memo(({ items }) => {
//   return (
//     <>
//       {items.map((item) => (
//         <div className={styles.info} key={item.id}>
//           <p>Additional information: </p>
//           <ul className={styles.list}>
//             <li className={styles.item}>
//               <NavLink
//                 className={styles.link}
//                 to={{ pathname: `/movies/${item.id}/cast` }}
//               >
//                 Cast
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={styles.link}
//                 to={{ pathname: `/movies/${item.id}/reviews` }}
//               >
//                 Reviews
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       ))}
//     </>
//   );
// });
