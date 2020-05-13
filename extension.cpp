#include "pxt.h"
using namespace pxt;

namespace dataStreamer {
    //%
   void setBaudRate(int rate) {
#if MICROBIT_CODAL     
     uBit.serial.setBaud(9600);
#elif
     uBit.serial.baud(9600);
#endif     
   }
}
