// OP_0 {pubKeyHash}
var bscript = require('../../script');
var types = require('../../types');
var typeforce = require('typeforce');
var OPS = require('bitcoin-ops');
function check(script) {
    var buffer = bscript.compile(script);
    return buffer.length === 22 &&
        buffer[0] === OPS.OP_0 &&
        buffer[1] === 0x14;
}
check.toJSON = function () { return 'Witness pubKeyHash output'; };
function encode(pubKeyHash) {
    typeforce(types.Hash160bit, pubKeyHash);
    return bscript.compile([OPS.OP_0, pubKeyHash]);
}
function decode(buffer) {
    typeforce(check, buffer);
    return buffer.slice(2);
}
module.exports = {
    check: check,
    decode: decode,
    encode: encode
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RlbXBsYXRlcy93aXRuZXNzcHVia2V5aGFzaC9vdXRwdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBRXBCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUNyQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDbEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUVoQyxTQUFTLEtBQUssQ0FBRSxNQUFNO0lBQ3BCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFcEMsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLEVBQUU7UUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJO1FBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUE7QUFDdEIsQ0FBQztBQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxPQUFPLDJCQUEyQixDQUFBLENBQUMsQ0FBQyxDQUFBO0FBRWpFLFNBQVMsTUFBTSxDQUFFLFVBQVU7SUFDekIsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFFdkMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBQ2hELENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBRSxNQUFNO0lBQ3JCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFFeEIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsS0FBSyxFQUFFLEtBQUs7SUFDWixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0NBQ2YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE9QXzAge3B1YktleUhhc2h9XG5cbnZhciBic2NyaXB0ID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0JylcbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4uLy4uL3R5cGVzJylcbnZhciB0eXBlZm9yY2UgPSByZXF1aXJlKCd0eXBlZm9yY2UnKVxudmFyIE9QUyA9IHJlcXVpcmUoJ2JpdGNvaW4tb3BzJylcblxuZnVuY3Rpb24gY2hlY2sgKHNjcmlwdCkge1xuICB2YXIgYnVmZmVyID0gYnNjcmlwdC5jb21waWxlKHNjcmlwdClcblxuICByZXR1cm4gYnVmZmVyLmxlbmd0aCA9PT0gMjIgJiZcbiAgICBidWZmZXJbMF0gPT09IE9QUy5PUF8wICYmXG4gICAgYnVmZmVyWzFdID09PSAweDE0XG59XG5jaGVjay50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnV2l0bmVzcyBwdWJLZXlIYXNoIG91dHB1dCcgfVxuXG5mdW5jdGlvbiBlbmNvZGUgKHB1YktleUhhc2gpIHtcbiAgdHlwZWZvcmNlKHR5cGVzLkhhc2gxNjBiaXQsIHB1YktleUhhc2gpXG5cbiAgcmV0dXJuIGJzY3JpcHQuY29tcGlsZShbT1BTLk9QXzAsIHB1YktleUhhc2hdKVxufVxuXG5mdW5jdGlvbiBkZWNvZGUgKGJ1ZmZlcikge1xuICB0eXBlZm9yY2UoY2hlY2ssIGJ1ZmZlcilcblxuICByZXR1cm4gYnVmZmVyLnNsaWNlKDIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVjazogY2hlY2ssXG4gIGRlY29kZTogZGVjb2RlLFxuICBlbmNvZGU6IGVuY29kZVxufVxuIl19