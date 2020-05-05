import { isArray, isRule } from '../helpers/judge.js'

class Verify {
    constructor(...args) {
        this.rules = [];
        
        this.addRule(...args);
    }

    addRule(...args) {
        if(args[0] === undefined) {
            return;
        }

        if(isArray(args[0])) {
            for(let i = 0, length = args[0].length; i < length; i++) {
                if(!isRule(args[0][i])) {
                    console.error(args[0]);
                    console.error('规则不符合要求');
                    return ;
                }
            }
            
            this.rules = this.rules.concat(args[0]);
            return ;
        }
        
        for(let i = 0, length = args.length; i < length; i++) {
            if(!isRule(args[i])) {
                console.error(args[i]);
                console.error('规则不符合要求');
                return ;
            }
        }               

        this.rules = this.rules.concat(args);
    }

    verify(values) {
        let result = {};
        for(let key in values) {
            result[key] = {
                success: true,
                resultList: [],
            }
        }
        
        for(let i = 0, outerRuleLength = this.rules.length; i < outerRuleLength; i++) {
            let rule = this.rules[i];
            
            for(let j = 0, innerRuleLength = rule.rules.length; j < innerRuleLength; j++) {
                let _rule = rule.rules[j];

                if(!_rule.verify.test(values[rule.name])) {
                    result[rule.name].success = false;
                    result[rule.name].resultList.push(_rule.errorMsg);
                }    
            }
        }

        return result;
    }

    static create(...args) {
        return new Verify(...args);
    }
}

export default Verify