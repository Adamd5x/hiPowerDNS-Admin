﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using hiDNService.API.Infrastructure.Database;

#nullable disable

namespace hiDNService.API.Infrastructure.Database.migrations
{
    [DbContext(typeof(ApiDbContext))]
    partial class ApiDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.5");

            modelBuilder.Entity("hiDNService.API.Model.Entity.ZoneTemplate", b =>
                {
                    b.Property<string>("ItemId")
                        .HasMaxLength(36)
                        .HasColumnType("varchar")
                        .IsFixedLength();

                    b.Property<string>("Description")
                        .HasMaxLength(255)
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar");

                    b.HasKey("ItemId");

                    b.HasIndex("Name");

                    b.ToTable("T_ZoneTemplate", (string)null);
                });

            modelBuilder.Entity("hiDNService.API.Model.Entity.ZoneTemplateRecord", b =>
                {
                    b.Property<string>("ItemId")
                        .HasMaxLength(36)
                        .HasColumnType("varchar")
                        .IsFixedLength();

                    b.Property<string>("Data")
                        .HasMaxLength(255)
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasMaxLength(255)
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsActive")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar");

                    b.Property<int?>("TTL")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("varchar");

                    b.Property<string>("ZoneTemplateId")
                        .IsRequired()
                        .HasMaxLength(36)
                        .HasColumnType("varchar")
                        .IsFixedLength();

                    b.HasKey("ItemId");

                    b.HasIndex("Name");

                    b.HasIndex("ZoneTemplateId");

                    b.HasIndex("ZoneTemplateId", "IsActive");

                    b.HasIndex("ZoneTemplateId", "Type", "IsActive");

                    b.ToTable("T_ZoneTemplateRecord", (string)null);
                });

            modelBuilder.Entity("hiDNService.API.Model.Entity.ZoneTemplateRecord", b =>
                {
                    b.HasOne("hiDNService.API.Model.Entity.ZoneTemplate", "ZoneTemplate")
                        .WithMany("Records")
                        .HasForeignKey("ZoneTemplateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ZoneTemplate");
                });

            modelBuilder.Entity("hiDNService.API.Model.Entity.ZoneTemplate", b =>
                {
                    b.Navigation("Records");
                });
#pragma warning restore 612, 618
        }
    }
}
