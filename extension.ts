/**
 * Writing data for hacking stem experiments
 */
//% weight=4 color=#002050 icon="\uf287"
namespace dataStreamer {
    /**
     * Print a numeric value to the serial port
     * @param value to send over serial
     */
    //% blockId=datastreamer_writeNumber block="dataStreamer| write number %value"
    //% weight=5
    export function writeNumber(value: number) {
        serial.writeNumber(value)
    }

    /**
     * Print a line of text to the serial port
     * @param text to send over serial
     */
    //% blockId=datastreamer_writeline block="dataStreamer|write line %text"
    //% weight=5
    export function writeLine(text: string) {
        serial.writeLine(text)
    }    

    /**
     * Print an array of numeric values as CSV to the serial port
     */
    //% weight=86
    //% blockId=datastreamer_writenumbers block="dataStreamer|write numbers %values"
    export function writeNumbers(values: number[]): void {
        serial.writeNumbers(values)
    }

    //% shim=dataStreamer::init
    function init() {
        // keep this statement
        return;
    }

    init();
  
}