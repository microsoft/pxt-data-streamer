namespace serial {
    function fixedToString(value: number, scale: number) {
        let s = "";
        let v = value;
        if (v < 0) {
            v = -v;
            s += "-";
        }

        let integral = Math.idiv(v, scale);
        let decimal = v % scale;
        s += integral.toString();
        if (decimal) {
            s += '.';
            scale = Math.idiv(scale, 10);
            while (scale) {
                let digit = Math.idiv(decimal, scale);
                if (digit)
                    s += digit.toString();
                else
                    s += "0";
                decimal = decimal % scale;
                scale = Math.idiv(scale, 10);
            }
        }
        return s;
    }

    /**
     * Writes a numeric value scaled by 1000, as a floating point,  to serial
     * @param value the milli value to write
     */
    //% blockId=serialwritemillinumber block="serial write milli number %value"
    //% advanced=true weight=5
    export function writeMilliNumber(value: number) {
        serial.writeLine(fixedToString(value, 1000));
    }
}