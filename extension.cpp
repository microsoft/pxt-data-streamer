#include "pxt.h"
using namespace pxt;
namespace dataStreamer {
   //%
   void init() {
     uBit.serial.redirect(USBTX, USBRX);
     uBit.serial.baud(9600);
   }

   //% blockId=serial_redirect block="set serial baud rate %rate"
   void setBaudRate(BaudRate rate) {
    uBit.serial.baud((int)rate);
   }
}
