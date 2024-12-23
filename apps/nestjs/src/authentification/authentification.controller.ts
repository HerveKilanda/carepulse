
import { Body, Controller, Get } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { userSchema} from "@repo/types"

@Controller('authentification')
export class AuthentificationController {
  constructor(private readonly authentificationService: AuthentificationService) {}

  @Get()
  getUser(@Body() userdto: typeof userSchema){
    const userData = {
      nom: "Kilanda", prenom: "Herve", age: 25
    }
    const parsedUser = userSchema.parse(userData);
    return userData
  }

  
}
