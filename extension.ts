/**
 * Writing data for hacking stem experiments
 */
//% weight=4 color=#ffab19 icon="\uf287"
namespace dataStreamer {
    /**
     * Print a numeric value to the serial port
     * @param value to send over serial
     * @param decimalDigits (optional) unit of the value
     */
    //% blockId=datastreamer_writeNumber block="write number %value||decimal digits %decimalDigits"
    //% weight=30
    //% decimalDigits.defl=2
    //% expandableArgumentMode=toggle

    export function writeNumber(value: number, decimalDigits: number) {
        //Format to right number of decimalDigits
        let text: string = value.toString();
        let len = 0; //Tracks the subscrtring length

        for (; len < text.length; len++) { //Find the .
            if (text[len] == ".") { break; }
        }

        if (decimalDigits != 0) {
            len++ //Account for .
            if (len + decimalDigits < text.length) {
                len = len + decimalDigits;
            } else {
                len = text.length;
            }
        }

        serial.writeString(text.substr(0, len))
    }

    /**
     * Print a text to the serial port
     * @param text to send over serial
     */
    //% blockId=datastreamer_writestring block="write string %text"
    //% weight=20
    //% text.defl=","
    //% decimalDigits.defl=2
    export function writeString(text: string) {
        serial.writeString(text)
    }

    /**
     * Print a new line to the serial port
     */
    //% blockId=datastreamer_writeline block="write line"
    //% weight=20
    export function writeLine() {
        serial.writeLine("")
    }

    /**
     * Print an array of numeric values as CSV to the serial port
     */
    //% blockId=datastreamer_writenumbers block="write array as comma seperated numbers %values||decimal digits %decimalDigits"
    //% weight=10
    //% values.shadow="lists_create_with"
    //% decimalDigits.defl=2
    //% expandableArgumentMode=toggle
    export function writeNumbers(values: number[], decimalDigits: number): void {
        for (let i = 0; i < values.length; i++) {
            dataStreamer.writeNumber(values[i], decimalDigits)
            if ((i + 1) < values.length) {
                dataStreamer.writeString(",")
            }
        }
    }

    //% shim=dataStreamer::init
    function init() {
        // keep this statement
        return;
    }

    init();

}