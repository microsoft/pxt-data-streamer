#include "pxt.h"
using namespace pxt;

namespace dataStreamer {
   //%
   void init() {
     uBit.serial.redirect(USBTX, USBRX);
     uBit.serial.baud(9600);
   }

    /**
    * Set the USB baud rate connection.
    * @param rate the new baud rate.
    */
    //% weight=10
    //% blockId=datastreamer_setBaud block="set baud rate %rate"
    //% rate.defl=9600

   void setBaudRate(int rate) {
    uBit.serial.baud(rate);
   }
}
