const inboundEmail = 'usertest235example@blabla.com';
const hideEmail = (emailArg) => {
    let domainPart = emailArg.slice(0, emailArg.indexOf('@'));
    let remainingPart = emailArg.slice(emailArg.indexOf('@'));
    return domainPart.slice(0, domainPart.length / 2) + '...' + remainingPart;
  
  };
  
  console.log(hideEmail(inboundEmail));