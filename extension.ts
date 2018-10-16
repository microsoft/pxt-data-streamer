/**
 * Writing data for hacking stem experiments
 */
//% weight=4 color=#002050 icon="\uf287"
namespace dataStreamer {
    /**
     * Print a numeric value to the serial port
     * @param value to send over serial
     */
    //% blockId=datastreamer_writeNumber block="write number %value"
    //% weight=30
    export function writeNumber(value: number) {
        serial.writeNumber(value)
    }

    /**
     * Print a text to the serial port
     * @param text to send over serial
     */
    //% blockId=datastreamer_writestring block="write string %text"
    //% weight=20
    //% text.defl=","
    export function writeString(text: string) {
        serial.writeString(text)
    }

    /**
     * Print a new line to the serial port, optionally add the text before the new line
     * @param optional text to send over serial before new line
     */
    //% blockId=datastreamer_writeline block="write line %text"
    //% weight=20
    export function writeLine(text: string) {
        serial.writeLine(text)
    }

    /**
     * Print an array of numeric values as CSV to the serial port
     */
    //% blockId=datastreamer_writenumbers block="write comma seperated numbers %values"
    //% weight=10
    export function writeNumbers(values: number[]): void {
        for (let i = 0; i < values.length; i++) {
            serial.writeNumber(values[i])
            serial.writeLine(",")
        }
    }

    //% shim=dataStreamer::init
    function init() {
        // keep this statement
        return;
    }

    init();

}