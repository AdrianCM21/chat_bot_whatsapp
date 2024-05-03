import {startPortal} from "../portal/portal.js"
import { startBot } from "../utils/createBot.js"
import { flowPrincipal } from "./flows/Saludos.js"

const main = async () => {
    startBot([flowPrincipal])
    startPortal()
  }

main()
