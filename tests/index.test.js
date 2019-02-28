const Timestamp2String=require("../src/index");
describe("util test",()=>{
    test("result should be 2019-2-28 13:57:35",()=>{
        expect(Timestamp2String(1551333455538,"yyyy年M月d日 hh:mm:ss"))
            .toBe("2019年2月28日 13:57:35")
    })
});
