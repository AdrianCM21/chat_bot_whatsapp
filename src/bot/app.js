import {startPortal} from "../portal/portal.js"
import { startBot } from "../utils/createBot.js"
import { flowPrincipal } from "./flows/funcionarios.js"


const main = async () => {
    startBot([flowPrincipal])
    startPortal()
  }

main()
