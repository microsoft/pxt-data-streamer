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
    * @param rate the new baud rate. eg: 115200
    */
    //% weight=10
    //% blockId=datastreamer_setBaud block="set baud rate %rate"

   void setBaudRate(int rate) {
    uBit.serial.baud(rate);
   }
}
