import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Português', label: 'Português' },
                        ]}
                    />
                    <Select 
                        name="weekday" 
                        label="Dia da Semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input type="time" name="time" label="Horário"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}