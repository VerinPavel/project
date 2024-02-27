import React from 'react'
import './_selectOptions.scss'

export default function SelectOptions() {
    return (
        <select name="system" id="system">
            <option disabled value="">
                Выберите тип системы
            </option>
            <option value="">Sed ut perspiciati</option>
            <option value="">Nemo enim ipsam</option>
            <option value="">Et harum quidem</option>
            <option value="">Temporibus autem</option>
            <option value="">Itaque earum rerum</option>
        </select>
    )
}
