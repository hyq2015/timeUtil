const Timestamp2String=require("../lib");
describe("util test",()=>{
    test("result should be 2019-2-28 13:57:35",()=>{
        expect(Timestamp2String(1551333455538,"yyyy-M-d hh:mm:ss"))
            .toBe("2019-2-28 13:57:35")
    })
});
