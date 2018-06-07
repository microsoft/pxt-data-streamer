#include "pxt.h"
using namespace pxt;
namespace hackingSTEM {
   //%
   void initSerial() {
     uBit.serial.redirect(USBTX, USBRX);
     uBit.serial.baud(9600);
   }
}
