namespace serial {
    function fixedToString(value: number, scale: number) {
        scale = scale | 0;
        let s = "";
        if (value < 0) {
            value = -value;
            s += "-";
        }

        const integral = Math.idiv(value, scale);
        let decimal = value % scale;
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
                decimal %= scale;
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