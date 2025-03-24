import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName,PlaceholderContent
} from '@microsoft/sp-application-base';
///import Header from './Header'
//import IntranetNavBar from './TopNavBar'
import TopNavigationBar from './TopNavigationBar1'
//import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'GlobalNavApplicationCustomizerStrings';
//import ModernHeader, { IModernHeaderProps } from '../components/ModernHeader';
//import ModernHeader,{IModernHeaderProps} from './ModernHeader'

const LOG_SOURCE: string = 'GlobalNavApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IGlobalNavApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class GlobalNavApplicationCustomizer
  extends BaseApplicationCustomizer<IGlobalNavApplicationCustomizerProperties> {

    private _topPlaceholder: PlaceholderContent | undefined;
    //private _sp: SPFI;
 

    // private startReactRender() {
    //     console.log('Available placeholders: ',
    //         this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', '));
 
    //     // Handling the bottom placeholder  
    //     if (!this._topPlaceholder) {
    //         this._topPlaceholder =
    //             this.context.placeholderProvider.tryCreateContent(
    //                 PlaceholderName.Top,
    //                 { onDispose: this._onDispose });
 
    //         // The extension should not assume that the expected placeholder is available.  
    //         if (!this._topPlaceholder) {
    //             console.error('The expected placeholder (Bottom) was not found.');
    //             return;
    //         }
 
    //         const elem: React.ReactElement = React.createElement(TopNavigationBar);
    //         ReactDOM.render(elem, this._topPlaceholder.domElement);
    //     }
    // }
 

  public onInit(): Promise<void> {

    Log.info(LOG_SOURCE, `Initialized Custom Header Application Customizer`);
    
    this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    //const userDisplayName = this.context.pageContext.user.displayName;
    //const elem: React.ReactElement= React.createElement(IntranetNavBar, {context: this.context});
    const elem: React.ReactElement= React.createElement(TopNavigationBar,{context:this.context});

    if (this._topPlaceholder && this._topPlaceholder.domElement) {
      ReactDOM.render(elem, this._topPlaceholder.domElement);
    }
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    //this._sp = spfi().using(SPFx(this.context));
        // this.context.application.navigatedEvent.add(this, this.startReactRender);
        // this.startReactRender();
        
        return Promise.resolve();
  }
//   private _onDispose(): void {
//     console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
// }
}
