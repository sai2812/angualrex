import {Injectable,Optional} from '@angular/core';
import {Account} from "./account.model";
import {LoggerService} from '../util/logger.service';

@Injectable()
export class AccountService{
  constructor(@Optional() private _logger:LoggerService){} //1
  
  private _accounts:Array<Account> = [{
    id:1,
    title: "Global Bank",
    description: "Main bank account.",
    balance: 567
  },
  {
    id:2,
    title:"Pacific Bank",
    description: null,
    balance: 322
    }];

    public getAll():Array<Account>{
      return this.:accounts;
    }


    private _nextID = 3;
    public create(newAccount:Account){
      newAccount.id = this._nextId++;

      if(this._logger)
        this._logger.log('Account created: ' + newAccount.title);

      this._accounts.push(newAccount);
   }


  public remove(index:number){
  if(this._logger)
    this._logger.log('Account deleted: ' + this._accounts[index].title);

  this._accounts.splice(index, 1);
  }


}

export let ACCOUNT_SERVICE_PROVIDERS:Array<any> = [AccountService, LoggerService];
