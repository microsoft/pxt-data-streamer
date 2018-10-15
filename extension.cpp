#include "pxt.h"
using namespace pxt;

namespace dataStreamer {
   //%
   void init() {
     uBit.serial.redirect(USBTX, USBRX);
     uBit.serial.baud(9600);
   }

   //% blockId=serial_redirect block="set serial baud rate %rate"
   void setBaudRate(int rate) {
    uBit.serial.baud(rate);
   }
}
