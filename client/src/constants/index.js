import { records, screening, user, apps, charts} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: apps,
    link: "/",
  },
  {
    name: "records",
    imgUrl: records,
    link: "/medical-records",
  },
  {
    name: "screening",
    imgUrl: screening,
    link: "/screening-schedules",
  },
  {
    name: "charts",
    imgUrl: charts,
    link: "/charts",
  },
  {
    name: "profile",
    imgUrl: user,
    link: "/profile",
  },
  
];
