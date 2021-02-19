import { Component, OnInit, ViewEncapsulation, TemplateRef,ViewChild } from '@angular/core'; //, ViewEncapsulation
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { IndexApiService } from '../../../_services/index-api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
  class obj
  {
    constructor() {}
    id:         string;
    code:       string;
    nom_client: string;
    adresse:    string;
    telephone:  string;
    fax:        string;
    email:      string;
    nif:        string;
    stat:       string;
    cif:        string;
    reg_comm:   string;
    groupe_app: string;
    groupe:     string;
    capital:    string;
    effectif:   string;
  }

  @Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    providers: 
    [{
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }],
    encapsulation: ViewEncapsulation.None
  })

  export class ClientComponent implements OnInit
  {
    
    NouvelItem  : boolean;
    currentItem : any;
    selectedItem: any;

    clientForm:   FormGroup;
    client :      any;
  
    step1:  boolean;
    step2:  boolean;

    afficherFormAjoutModif : Boolean;
    afficherboutonModifSupr: Boolean;

    loadingIndicator: boolean;
    reorderable:      boolean;
    rows_client:      any[];
    selected = [];

    columns = [
      { name: 'Nom client', prop: 'nom_client' }, 
      { name: 'Addresse',   prop: 'adresse' }, 
      { name: 'Telephone',  prop: 'telephone', sortable: true },
      { name: 'Email',      prop: 'email' },
      { name: 'Fax',        prop: 'fax' },
      { name: 'Nif',        prop: 'nif' },
      { name: 'Stat',       prop: 'stat' },
      { name: 'Cif',        prop: 'cif' },
      { name: 'Reg comm',   prop: 'reg_comm' },
      { name: 'Groupe app', prop: 'groupe_app' },
      { name: 'Groupe',     prop: 'groupe' },
      { name: 'Capital',    prop: 'capital' },
      { name: 'Effectif',   prop: 'effectif' }];
    // Private
    private _unsubscribeAll: Subject<any>;

  constructor(private _formBuilder: FormBuilder,private index_api: IndexApiService, public dialog: MatDialog)
  {
    // Set the private defaults
    this.reorderable      = true;
    this.loadingIndicator = true;
    this._unsubscribeAll  = new Subject();    
   }
   @ViewChild('suppressionDialog', { static: true }) suppressionDialog:TemplateRef<any>;

  ngOnInit(): void
  { 
    this.NouvelItem = false;
    this.afficherFormAjoutModif  = false;
    this.afficherboutonModifSupr = false;
    this.step1  = false;
    this.step2  = false;
    this.clientForm = this._formBuilder.group(
    {
      id        : [''],
      code      : ['', Validators.required],
      nom_client: ['', Validators.required],
      adresse   : ['',Validators.required],
      telephone : ['',Validators.required],
      fax       : ['',Validators.required],
      email     : ['',Validators.required],
      nif       : ['',Validators.required],
      stat      : ['',Validators.required],
      cif       : ['',Validators.required],
      reg_comm  : ['',Validators.required],
      groupe_app: ['',Validators.required],
      groupe    : ['',Validators.required],
      capital   : ['',Validators.required],
      effectif  : ['',Validators.required]
    });
        
    

    this.index_api.getAlls('Client').subscribe((response) =>
    {      
      this.rows_client = response['response'];
      this.loadingIndicator = false;
    });
  }

  ajouter()
  {
    this.afficherFormAjoutModif   = true;
    this.afficherboutonModifSupr  = false;
    this.NouvelItem = true;
    this.client     = {}
    this.selected   = [];
  }
  
  modifier()
  {
    this.client = 
    {
      id        : this.selectedItem.id,
      code      : this.selectedItem.code,
      nom_client: this.selectedItem.nom_client,
      adresse   : this.selectedItem.adresse,
      telephone : this.selectedItem.telephone,
      fax       : this.selectedItem.fax,
      email     : this.selectedItem.email,
      nif       : this.selectedItem.nif,
      stat      : this.selectedItem.stat,
      cif       : this.selectedItem.cif,
      reg_comm  : this.selectedItem.reg_comm,
      groupe_app: this.selectedItem.groupe_app,
      groupe    : this.selectedItem.groupe,
      capital   : this.selectedItem.capital,
      effectif  : this.selectedItem.effectif
    }

    this.afficherFormAjoutModif = true;
    this.NouvelItem = false;
  }
  
  supprimer()
  {
    this.afficherFormAjoutModif = false;
    this.dialog.open(this.suppressionDialog, { disableClose: true });
  }
  suppressionConfirmer()
  {
    this.ajout( this.selectedItem,1);
  }
  
  
  annuler()
  {
    this.afficherFormAjoutModif = false;
  }
  ajout( client,suppression)   
  {
      if (this.NouvelItem==false) 
      {
          this.test_existance (client,suppression);          
      }
      else
      {
          this.insert_in_base(client,suppression);
      }    
  }
 public test_existance = function (item,suppression) 
  {    
    if (suppression!=1) 
    {
        this.rows_client.forEach((client) =>
        {         
          if (client.id==item.id) 
          {
              if((client.code!=item.code)
                  ||(client.nom_client!=item.nom_client)
                  ||(client.adresse!=item.adresse)
                  ||(client.telephone!=item.telephone)
                  ||(client.fax!=item.fax)
                  ||(client.email!=item.email)
                  ||(client.nif!=item.nif)
                  ||(client.stat!=item.stat)
                  ||(client.cif!=item.cif)
                  ||(client.reg_comm!=item.reg_comm)
                  ||(client.groupe_app!=item.groupe_app)
                  ||(client.group!=item.group)
                  ||(client.capital!=item.capital)
                  ||(client.effectif!=item.effectif))
                      
                  {
                    this.insert_in_base (item,suppression);
                  }
                  else
                  {
                    this.afficherFormAjoutModif = false ;
                  }
          }
        });
      }
      else
      {
          this.insert_in_base(item,suppression);
      }
  }

  insert_in_base = function (client, suppression)
  {    
    let getId = 0;
    if (this.NouvelItem==false) 
    {
        getId = this.selectedItem.id; 
    }
      let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  
      let data = 
      {
        id        : getId,
        supprimer :suppression,
        code      :client.code,
        nom_client:client.nom_client,
        telephone :client.telephone,
        adresse   :client.adresse,
        email     :client.email,        
        fax       :client.fax,
        nif       :client.nif,
        stat      :client.stat,
        cif       :client.cif,
        reg_comm  :client.reg_comm,
        groupe_app:client.groupe_app,
        groupe    :client.groupe,
        capital   :client.capital,
        effectif  :client.effectif
      }

      let insert_data = this.serializeData(data);
      
      this.index_api.add('Client',insert_data , config).subscribe((response) =>
      {
        //this.selectedItem.nom_client=client.nom_client;
        if (this.NouvelItem == false) 
        {
                    // Update or delete: id exclu                    
            if(suppression==0) 
            {
              this.selectedItem.nom_client  = client.nom_client;
              this.selectedItem.code        = client.code;
              this.selectedItem.telephone   = client.telephone;
              this.selectedItem.adresse     = client.adresse;
              this.selectedItem.email       = client.email;
              this.selectedItem.fax         = client.fax;
              this.selectedItem.nif         = client.nif;
              this.selectedItem.stat        = client.stat;
              this.selectedItem.cif         = client.cif;
              this.selectedItem.reg_comm    = client.reg_comm;
              this.selectedItem.groupe_app  = client.groupe_app;
              this.selectedItem.groupe      = client.groupe;
              this.selectedItem.capital     = client.capital;
              this.selectedItem.effectif    = client.effectif;
            } 
            else 
            {    
              this.rows_client = this.rows_client.filter((obj)=>
              {                
                return obj.id !== this.currentItem.id;
              });
              this.rows_client  = [...this.rows_client];
              this.selected     = [];
              this.afficherboutonModifSupr = false;
            }
          }
          else
          {
            let item = {
                        id        :String(response.response) ,
                        nom_client: client.nom_client,
                        code      : client.code,
                        telephone : client.telephone,
                        adresse   : client.adresse,
                        email     : client.email,
                        fax       : client.fax,
                        nif       : client.nif,
                        stat      : client.stat,
                        cif       : client.cif,
                        reg_comm  : client.reg_comm,
                        groupe_app: client.groupe_app,
                        groupe    : client.groupe,
                        capital   : client.capital,
                        effectif  : client.effectif,
                    };
            this.rows_client.unshift(item); 
            this.rows_client  = [...this.rows_client];                   
            this.NouvelItem   = false;
          }
          this.afficherFormAjoutModif = false ;
      },error =>
      {
        console.log("erreur");
      });
      
  }
  onSelectclient(event)
  {  
    this.selectedItem = event.selected[0];
    this.currentItem  = JSON.parse(JSON.stringify(event.selected[0]));
    
    this.step1  = true;
    this.step2  = false;
    this.afficherboutonModifSupr = true;
      
  }
  onActivate(event)
  {
    if (event.type === 'click')
    {
      console.log(event.row);
    }
  }
  
  //serialized representation of data like $.param()
   private serializeData( data )
   {     
        var buffer = [];    
        // Serialize each key in the object.
        for ( var name in data )
        { 
            if ( ! data.hasOwnProperty( name ))
            { 
                continue; 
            }
    
            var value = data[ name ];    
            buffer.push( encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )); 
        }
    
        // Serialize the buffer and clean it up for transportation.
        var source = buffer.join( "&" ).replace( /%20/g, "+" ); 
        return( source ); 
    }

}
