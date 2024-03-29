/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#e69100 icon="\uf287"
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
    export function writeNumber(value: number, decimalDigits: number = 2) {
        if (isNaN(value)) {
            serial.writeString(" ")
            return; // don't write anything if the number is not defined
        }

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
    export function writeString(text: string) {
        if (text)
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
     * Configures the serial communication to use USB and 9600 bauds
     */
    export function setup(baudRate = BaudRate.BaudRate9600) {
        serial.redirectToUSB()
        if (baudRate)
            serial.setBaudRate(baudRate)
    }

    /**
     * Print an array of numeric values as CSV to the serial port
     */
    //% blockId=datastreamer_writenumberarray block="write number array %values||decimal digits %decimalDigits"
    //% weight=10
    //% values.shadow="lists_create_with"
    //% decimalDigits.defl=2
    //% expandableArgumentMode=toggle
    export function writeNumberArray(values: number[], decimalDigits: number = 2): void {
        for (let i = 0; i < values.length; i++) {
            dataStreamer.writeNumber(values[i], decimalDigits)
            if ((i + 1) < values.length) {
                dataStreamer.writeString(",")
            }
        }
    }


    setup()
}
