import { makeInbox, makeIdeas, makeTasks } from '@/main/factories/pages'
import Icon from "@/presentation/assets/"

var routes = [
  {
    path: "/ideas",
    name: "Ideas",
    alt:"navigate to ideas",
    layout: "/main",
    component: makeIdeas,
    redirect: false,
    icon:Icon.ideasIcon
  },
  {
    path: "/tasks",
    name: "Tasks",
    alt:"navigate to tasks",
    layout: "/main",
    component: makeTasks,
    redirect: false,
    icon:Icon.tasksIcon
  },  {
    path: "/inbox",
    name: "Inbox",
    alt:"navigate to inbox",
    layout: "/main",
    component: makeInbox,
    redirect: false,
    icon:Icon.inboxIcon
  }, 

];


export default routes;