// import moment = require('moment');

export class ValidationService {
    public static isEmpty(value) {
        return value == null || value == undefined || value.trim().length == 0;
    }

    public static isNull(value) {
        return value == null || value == undefined;
    }

    public static isNotNull(value) {
        return !ValidationService.isNull(value);
    }

    public static isMaxLength(value, length) {
        return value.length > length;
    }

    public static isMinLength(value, length) {
        return value.length < length;
    }

    //   public static isValidDate(date: Date) {
    //     return moment(date).isValid();
    //   }

    //   public static isNotValidDate(date) {
    //     return !ValidationService.isValidDate(date);
    //   }

    //   public static isDateAfter(date1: Date, date2: Date) {
    //     return moment(date1).isAfter(date2);
    //   }

    public static isValidEmail(email) {
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return pattern.test(String(email).toLowerCase());
    }

    public static isValidPhoneNumber(phoneNumber) {
        const pattern = /^[0-9]{10}$/;
        return pattern.test(phoneNumber);
    }

    public static isPublicDomainEmail(email) {
        if (email.endsWith('@gmail.com') || email.endsWith('@yahoo.com')) {
            return true;
        }
        return false;
    }
}
