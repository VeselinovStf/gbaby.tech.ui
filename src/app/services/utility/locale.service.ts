import { Injectable } from '@angular/core';
import { ILocale } from 'src/app/types/ilocale';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {

    private locales: ILocale[];
    private selectedLocale!: ILocale;

    constructor() {
        this.locales = [
            { name: "en", icon: "EN", default: true },
            { name: "bg", icon: "BG", default: false }
        ]

        this.selectedLocale = this.locales.find(l => l.name === navigator.language.split('-')[0])!;
    }

    setLocale(localeIndex: any) {
        this.selectedLocale = this.locales[localeIndex];
    }

    getLocale(): ILocale {
        return this.selectedLocale ? this.selectedLocale : this.locales.find(l => l.default == true)!;
    }
}