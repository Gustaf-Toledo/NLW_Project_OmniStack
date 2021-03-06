import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import { useHistory } from 'react-router-dom';

import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';


export default function TeacherForm() {
    const History = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    
    const [scheduleItems, setScheduleItems] = useState([
        { weekday: 0, from:'', to:'' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { weekday: 0, from:'', to:'' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updateScheduleItem);
    }

    function handleCreateClass(e: FormEvent) {

        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso.');

            History.push('/study');
        }).catch(() => {
            alert('Erro ao realizar cadastro.');
        })
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas." 
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                            name="name" 
                            label="Nome" 
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp} 
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                            />
                        <Textarea 
                            name="bio" 
                            label="Biografia" 
                            value={bio} 
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
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
                    
                        <Input 
                            name="cost" 
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem} >+ Novo Horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.weekday} className="schedule-item">
                                    <Select 
                                        name="weekday" 
                                        label="Dia da Semana"
                                        value={scheduleItem.weekday}
                                        onChange={e => setScheduleItemValue(index, 'weekday', e.target.value)}
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
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
        
    )
}