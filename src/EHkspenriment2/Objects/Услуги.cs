﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.EHkspenriment2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Услуги.
    /// </summary>
    // *** Start programmer edit section *** (Услуги CustomAttributes)

    // *** End programmer edit section *** (Услуги CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугиE", new string[] {
            "ПОзиция as \'П озиция\'",
            "Прайс as \'Прайс\'",
            "Прайс.Цена as \'Цена\'",
            "Прайс.СписокУслуг as \'Список услуг\'",
            "Прайс.СписокУслуг.Имя as \'Имя\'"}, Hidden=new string[] {
            "Прайс.Цена"})]
    [MasterViewDefineAttribute("УслугиE", "Прайс", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Цена")]
    [View("УслугиL", new string[] {
            "ПОзиция as \'П озиция\'",
            "Прайс as \'Прайс\'",
            "Прайс.Цена as \'Цена\'"})]
    public class Услуги : ICSSoft.STORMNET.DataObject
    {
        
        private int fПОзиция;
        
        private IIS.EHkspenriment2.Прайс fПрайс;
        
        // *** Start programmer edit section *** (Услуги CustomMembers)

        // *** End programmer edit section *** (Услуги CustomMembers)

        
        /// <summary>
        /// ПОзиция.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.ПОзиция CustomAttributes)

        // *** End programmer edit section *** (Услуги.ПОзиция CustomAttributes)
        public virtual int ПОзиция
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.ПОзиция Get start)

                // *** End programmer edit section *** (Услуги.ПОзиция Get start)
                int result = this.fПОзиция;
                // *** Start programmer edit section *** (Услуги.ПОзиция Get end)

                // *** End programmer edit section *** (Услуги.ПОзиция Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.ПОзиция Set start)

                // *** End programmer edit section *** (Услуги.ПОзиция Set start)
                this.fПОзиция = value;
                // *** Start programmer edit section *** (Услуги.ПОзиция Set end)

                // *** End programmer edit section *** (Услуги.ПОзиция Set end)
            }
        }
        
        /// <summary>
        /// Услуги.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.Прайс CustomAttributes)

        // *** End programmer edit section *** (Услуги.Прайс CustomAttributes)
        [PropertyStorage(new string[] {
                "Прайс"})]
        [NotNull()]
        public virtual IIS.EHkspenriment2.Прайс Прайс
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.Прайс Get start)

                // *** End programmer edit section *** (Услуги.Прайс Get start)
                IIS.EHkspenriment2.Прайс result = this.fПрайс;
                // *** Start programmer edit section *** (Услуги.Прайс Get end)

                // *** End programmer edit section *** (Услуги.Прайс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.Прайс Set start)

                // *** End programmer edit section *** (Услуги.Прайс Set start)
                this.fПрайс = value;
                // *** Start programmer edit section *** (Услуги.Прайс Set end)

                // *** End programmer edit section *** (Услуги.Прайс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиE", typeof(IIS.EHkspenriment2.Услуги));
                }
            }
            
            /// <summary>
            /// "УслугиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиL", typeof(IIS.EHkspenriment2.Услуги));
                }
            }
        }
    }
}
