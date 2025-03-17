const { staking } = require("../helper/staking");
const { getUniTVL } = require('../helper/unknownTokens')

const MasterChefContract = "0x96332db14e87e3ae19e7ee7f09076607473692a3";
const TDC = "0x073d8226f87adbe6011c884e120dc278ab0ab448";

module.exports = {
  methodology: `Uses factory(0xCA3256975A99415cA37057d227428051Db1C0EC2) address and whitelisted tokens address to find and price Liquidity Pool pairs`,
  misrepresentedTokens: true,
  bsc: {
    tvl: getUniTVL({ factory: '0xCA3256975A99415cA37057d227428051Db1C0EC2', useDefaultCoreAssets: true }),
    staking: staking(MasterChefContract, TDC),
  },
  
  dsc: { tvl: () => ({}) }
  
};
